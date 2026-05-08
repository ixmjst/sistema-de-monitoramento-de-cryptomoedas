<?php

namespace App\Controllers;

use App\Models\Portfolio;
use App\Models\Cryptocurrency;
use App\Middleware\AuthMiddleware;

class PortfolioController extends BaseController
{
    private $portfolioModel;
    private $cryptoModel;

    public function __construct()
    {
        parent::__construct();
        $this->portfolioModel = new Portfolio();
        $this->cryptoModel = new Cryptocurrency();
    }

    public function list()
    {
        $user = AuthMiddleware::getUser();
        if (!$user) {
            return $this->error('Unauthorized', 401);
        }

        $portfolio = $this->portfolioModel->getUserPortfolio($user['id']);
        $this->success($portfolio, 'Portfolio retrieved');
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
            'quantity' => ['required' => true, 'type' => 'number'],
            'purchase_price' => ['required' => true, 'type' => 'number'],
            'purchase_date' => ['required' => true]
        ]);

        if (!empty($errors)) {
            return $this->error('Validation failed', 422, $errors);
        }

        try {
            $crypto = $this->cryptoModel->getCryptoById($input['crypto_id']);
            if (!$crypto) {
                return $this->error('Cryptocurrency not found', 404);
            }

            $id = $this->portfolioModel->addPortfolioItem(
                $user['id'],
                $input['crypto_id'],
                $input['quantity'],
                $input['purchase_price'],
                $input['purchase_date'],
                $input['notes'] ?? null
            );

            $this->success(['id' => $id], 'Portfolio item added successfully', 201);
        } catch (\Exception $e) {
            $this->error('Failed to add portfolio item: ' . $e->getMessage(), 500);
        }
    }

    public function update($id)
    {
        $user = AuthMiddleware::getUser();
        if (!$user) {
            return $this->error('Unauthorized', 401);
        }

        $input = $this->getJsonInput();
        $item = $this->portfolioModel->getPortfolioItemById($id, $user['id']);

        if (!$item) {
            return $this->error('Portfolio item not found', 404);
        }

        try {
            $this->portfolioModel->updatePortfolioItem($id, $input);
            $this->success(null, 'Portfolio item updated successfully');
        } catch (\Exception $e) {
            $this->error('Failed to update portfolio item: ' . $e->getMessage(), 500);
        }
    }

    public function delete($id)
    {
        $user = AuthMiddleware::getUser();
        if (!$user) {
            return $this->error('Unauthorized', 401);
        }

        $item = $this->portfolioModel->getPortfolioItemById($id, $user['id']);

        if (!$item) {
            return $this->error('Portfolio item not found', 404);
        }

        try {
            $this->portfolioModel->removePortfolioItem($id);
            $this->success(null, 'Portfolio item removed successfully');
        } catch (\Exception $e) {
            $this->error('Failed to remove portfolio item: ' . $e->getMessage(), 500);
        }
    }
}
