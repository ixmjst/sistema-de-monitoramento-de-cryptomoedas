<?php

namespace App\Models;

class Favorite extends BaseModel
{
    protected $table = 'favorites';

    public function getUserFavorites($userId)
    {
        $sql = "SELECT f.*, c.name, c.symbol, c.current_price, c.price_change_24h, c.image_url, c.market_cap
                FROM {$this->table} f
                LEFT JOIN cryptocurrencies c ON f.crypto_code = c.code
                WHERE f.user_id = ?
                ORDER BY f.created_at DESC";
        $stmt = $this->query($sql, [$userId]);
        return $stmt->fetchAll();
    }

    public function addFavorite($userId, $cryptoCode)
    {
        $data = [
            'user_id' => $userId,
            'crypto_code' => $cryptoCode,
            'created_at' => date('Y-m-d H:i:s')
        ];
        return $this->create($data);
    }

    public function removeFavorite($userId, $cryptoCode)
    {
        $sql = "DELETE FROM {$this->table} WHERE user_id = ? AND crypto_code = ?";
        $stmt = $this->query($sql, [$userId, $cryptoCode]);
        return $stmt->execute();
    }

    public function isFavorite($userId, $cryptoCode)
    {
        $sql = "SELECT id FROM {$this->table} WHERE user_id = ? AND crypto_code = ?";
        $stmt = $this->query($sql, [$userId, $cryptoCode]);
        return $stmt->fetch() !== false;
    }
}
