<?php

namespace App\Models;

class Portfolio extends BaseModel
{
    protected $table = 'portfolio';

    public function getUserPortfolio($userId)
    {
        $sql = "SELECT p.*, c.name, c.code, c.symbol, c.current_price 
                FROM {$this->table} p
                JOIN cryptocurrencies c ON p.crypto_id = c.id
                WHERE p.user_id = ?
                ORDER BY p.created_at DESC";
        $stmt = $this->query($sql, [$userId]);
        return $stmt->fetchAll();
    }

    public function addPortfolioItem($userId, $cryptoId, $quantity, $purchasePrice, $purchaseDate, $notes = null)
    {
        $data = [
            'user_id' => $userId,
            'crypto_id' => $cryptoId,
            'quantity' => $quantity,
            'purchase_price' => $purchasePrice,
            'purchase_date' => $purchaseDate,
            'notes' => $notes,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ];

        return $this->create($data);
    }

    public function updatePortfolioItem($id, $data)
    {
        $data['updated_at'] = date('Y-m-d H:i:s');
        return $this->update($id, $data);
    }

    public function removePortfolioItem($id)
    {
        return $this->delete($id);
    }

    public function getPortfolioItemById($id, $userId)
    {
        $sql = "SELECT * FROM {$this->table} WHERE id = ? AND user_id = ?";
        $stmt = $this->query($sql, [$id, $userId]);
        return $stmt->fetch();
    }

    public function getUserPortfolioTotal($userId)
    {
        $sql = "SELECT 
                COUNT(id) as total_items,
                SUM(quantity * purchase_price) as total_investment,
                SUM(quantity * current_value) as current_total_value
                FROM {$this->table}
                WHERE user_id = ?";
        $stmt = $this->query($sql, [$userId]);
        return $stmt->fetch();
    }
}
