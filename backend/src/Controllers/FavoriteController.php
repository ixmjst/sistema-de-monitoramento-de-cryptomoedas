<?php

namespace App\Controllers;

use App\Models\Favorite;
use App\Middleware\AuthMiddleware;

class FavoriteController extends BaseController
{
    private $favoriteModel;

    public function __construct()
    {
        parent::__construct();
        $this->favoriteModel = new Favorite();
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

        $errors = $this->validateInput($input, [
            'crypto_id' => ['required' => true, 'type' => 'number']
        ]);

        if (!empty($errors)) {
            return $this->error('Validation failed', 422, $errors);
        }

        try {
            $isFavorite = $this->favoriteModel->isFavorite($user['id'], $input['crypto_id']);
            if ($isFavorite) {
                return $this->error('This cryptocurrency is already in your favorites', 409);
            }

            $id = $this->favoriteModel->addFavorite(
                $user['id'],
                $input['crypto_id'],
                $input['notes'] ?? null
            );

            $this->success(['id' => $id], 'Favorite added successfully', 201);
        } catch (\Exception $e) {
            $this->error('Failed to add favorite: ' . $e->getMessage(), 500);
        }
    }

    public function delete($id)
    {
        $user = AuthMiddleware::getUser();
        if (!$user) {
            return $this->error('Unauthorized', 401);
        }

        try {
            $favorite = $this->favoriteModel->find($id);

            if (!$favorite || $favorite['user_id'] != $user['id']) {
                return $this->error('Favorite not found', 404);
            }

            $this->favoriteModel->delete($id);
            $this->success(null, 'Favorite removed successfully');
        } catch (\Exception $e) {
            $this->error('Failed to remove favorite: ' . $e->getMessage(), 500);
        }
    }
}
