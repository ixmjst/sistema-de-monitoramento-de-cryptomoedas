<?php

namespace App\Controllers;

use App\Models\History;
use App\Models\Cryptocurrency;
use App\Middleware\AuthMiddleware;

class HistoryController extends BaseController
{
    private $historyModel;
    private $cryptoModel;

    public function __construct()
    {
        parent::__construct();
        $this->historyModel = new History();
        $this->cryptoModel = new Cryptocurrency();
    }

    public function list()
    {
        $user = AuthMiddleware::getUser();
        if (!$user) {
            return $this->error('Unauthorized', 401);
        }

        $limit = (int)($this->getQueryParam('limit') ?? 100);
        if ($limit < 1 || $limit > 500) $limit = 100;

        $history = $this->historyModel->getUserHistory($user['id'], $limit);
        $this->success($history, 'History retrieved');
    }

    public function create()
    {
        $user = AuthMiddleware::getUser();
        if (!$user) {
            return $this->error('Unauthorized', 401);
        }

        $input = $this->getJsonInput();
        $cryptoCode = $input['crypto_code'] ?? $input['cryptoId'] ?? null;

        if (!$cryptoCode) {
            return $this->error('Validation failed', 422, ['crypto_code' => 'The crypto_code field is required.']);
        }

        if (empty($input['action'])) {
            return $this->error('Validation failed', 422, ['action' => 'The action field is required.']);
        }

        try {
            // Find or create crypto record
            $crypto = $this->cryptoModel->getCryptoByCode($cryptoCode);
            $cryptoId = $crypto ? $crypto['id'] : $this->createMinimalCrypto($cryptoCode, $input);

            $id = $this->historyModel->addHistoryEntry(
                $user['id'],
                $cryptoId,
                $input['action'],
                $input['quantity'] ?? null,
                $input['price'] ?? null,
                $input['description'] ?? null
            );

            $this->success(['id' => $id], 'History entry created successfully', 201);
        } catch (\Exception $e) {
            $this->error('Failed to create history entry: ' . $e->getMessage(), 500);
        }
    }

    private function createMinimalCrypto($code, $input)
    {
        return $this->cryptoModel->create([
            'code' => $code,
            'name' => $input['name'] ?? $code,
            'symbol' => $input['symbol'] ?? strtoupper(substr($code, 0, 4)),
            'current_price' => $input['price'] ?? 0,
            'created_at' => date('Y-m-d H:i:s')
        ]);
    }

    public function import()
    {
        $user = AuthMiddleware::getUser();
        if (!$user) {
            return $this->error('Unauthorized', 401);
        }

        $input = $this->getJsonInput();
        $entries = $input['entries'] ?? [];

        if (empty($entries) || !is_array($entries)) {
            return $this->error('No entries to import', 422);
        }

        $imported = 0;
        $errors = [];

        foreach ($entries as $i => $entry) {
            try {
                $cryptoCode = $entry['crypto_code'] ?? $entry['cryptoId'] ?? null;
                if (!$cryptoCode || empty($entry['action'])) {
                    $errors[] = "Entry $i: missing crypto_code or action";
                    continue;
                }

                $crypto = $this->cryptoModel->getCryptoByCode($cryptoCode);
                $cryptoId = $crypto ? $crypto['id'] : $this->cryptoModel->create([
                    'code' => $cryptoCode,
                    'name' => $entry['name'] ?? $cryptoCode,
                    'symbol' => $entry['symbol'] ?? strtoupper(substr($cryptoCode, 0, 4)),
                    'created_at' => date('Y-m-d H:i:s')
                ]);

                $this->historyModel->addHistoryEntry(
                    $user['id'],
                    $cryptoId,
                    $entry['action'],
                    $entry['quantity'] ?? null,
                    $entry['price'] ?? null,
                    $entry['description'] ?? null
                );
                $imported++;
            } catch (\Exception $e) {
                $errors[] = "Entry $i: " . $e->getMessage();
            }
        }

        $this->success([
            'imported' => $imported,
            'total' => count($entries),
            'errors' => $errors
        ], "$imported of " . count($entries) . " entries imported");
    }

    public function stats()
    {
        $user = AuthMiddleware::getUser();
        if (!$user) {
            return $this->error('Unauthorized', 401);
        }

        $stats = $this->historyModel->getStats($user['id']);
        $this->success($stats, 'History stats retrieved');
    }
}
