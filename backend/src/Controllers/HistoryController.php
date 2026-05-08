<?php

namespace App\Controllers;

use App\Models\History;
use App\Middleware\AuthMiddleware;

class HistoryController extends BaseController
{
    private $historyModel;

    public function __construct()
    {
        parent::__construct();
        $this->historyModel = new History();
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

        $errors = $this->validateInput($input, [
            'crypto_id' => ['required' => true, 'type' => 'number'],
            'action' => ['required' => true, 'type' => 'string']
        ]);

        if (!empty($errors)) {
            return $this->error('Validation failed', 422, $errors);
        }

        try {
            $id = $this->historyModel->addHistoryEntry(
                $user['id'],
                $input['crypto_id'],
                $input['action'],
                $input['old_value'] ?? null,
                $input['new_value'] ?? null,
                $input['quantity'] ?? null,
                $input['price'] ?? null,
                $input['description'] ?? null
            );

            $this->success(['id' => $id], 'History entry created successfully', 201);
        } catch (\Exception $e) {
            $this->error('Failed to create history entry: ' . $e->getMessage(), 500);
        }
    }
}
