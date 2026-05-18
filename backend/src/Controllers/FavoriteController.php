<?php

namespace App\Controllers;

use App\Models\Favorite;
use App\Models\Cryptocurrency;
use App\Middleware\AuthMiddleware;

class FavoriteController extends BaseController
{
    private $favoriteModel;
    private $cryptoModel;

    public function __construct()
    {
        parent::__construct();
        $this->favoriteModel = new Favorite();
        $this->cryptoModel = new Cryptocurrency();
    }

    public function list()
    {
        $user = AuthMiddleware::getUser();
        if (!$user) {
            return $this->error('Unauthorized', 401);
        }

        $favorites = $this->favoriteModel->getUserFavorites($user['id']);
        $this->success($favorites, 'Favorites retrieved');
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

        try {
            $isFavorite = $this->favoriteModel->isFavorite($user['id'], $cryptoCode);
            if ($isFavorite) {
                return $this->error('This cryptocurrency is already in your favorites', 409);
            }

            // Ensure crypto exists in local DB (create minimal record if not)
            $existing = $this->cryptoModel->getCryptoByCode($cryptoCode);
            if (!$existing) {
                $this->cryptoModel->create([
                    'code' => $cryptoCode,
                    'name' => $input['name'] ?? $cryptoCode,
                    'symbol' => $input['symbol'] ?? strtoupper(substr($cryptoCode, 0, 4)),
                    'image_url' => $input['image_url'] ?? $input['imageUrl'] ?? null,
                    'created_at' => date('Y-m-d H:i:s')
                ]);
            } else {
                $updateData = [];
                if (empty($existing['image_url']) && !empty($input['image_url'])) {
                    $updateData['image_url'] = $input['image_url'];
                }
                if (!empty($updateData)) {
                    $this->cryptoModel->update($existing['id'], $updateData);
                }
            }

            $id = $this->favoriteModel->addFavorite($user['id'], $cryptoCode);
            $this->success(['id' => $id, 'crypto_code' => $cryptoCode], 'Favorite added successfully', 201);
        } catch (\Exception $e) {
            $this->error('Failed to add favorite: ' . $e->getMessage(), 500);
        }
    }

    public function delete($cryptoCode)
    {
        $user = AuthMiddleware::getUser();
        if (!$user) {
            return $this->error('Unauthorized', 401);
        }

        try {
            $isFav = $this->favoriteModel->isFavorite($user['id'], $cryptoCode);
            if (!$isFav) {
                return $this->error('Favorite not found', 404);
            }

            $this->favoriteModel->removeFavorite($user['id'], $cryptoCode);
            $this->success(null, 'Favorite removed successfully');
        } catch (\Exception $e) {
            $this->error('Failed to remove favorite: ' . $e->getMessage(), 500);
        }
    }
}
