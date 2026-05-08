<?php

namespace App\Models;

class Favorite extends BaseModel
{
    protected $table = 'favorites';

    public function getUserFavorites($userId)
    {
        $sql = "SELECT f.*, c.* FROM {$this->table} f
                JOIN cryptocurrencies c ON f.crypto_id = c.id
                WHERE f.user_id = ?
                ORDER BY f.created_at DESC";
        $stmt = $this->query($sql, [$userId]);
        return $stmt->fetchAll();
    }

    public function addFavorite($userId, $cryptoId, $notes = null)
    {
        $data = [
            'user_id' => $userId,
            'crypto_id' => $cryptoId,
            'notes' => $notes,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ];

        return $this->create($data);
    }

    public function removeFavorite($userId, $cryptoId)
    {
        $sql = "DELETE FROM {$this->table} WHERE user_id = ? AND crypto_id = ?";
        $stmt = $this->query($sql, [$userId, $cryptoId]);
        return $stmt->execute();
    }

    public function isFavorite($userId, $cryptoId)
    {
        $sql = "SELECT id FROM {$this->table} WHERE user_id = ? AND crypto_id = ?";
        $stmt = $this->query($sql, [$userId, $cryptoId]);
        return $stmt->fetch() !== false;
    }

    public function updateFavorite($id, $data)
    {
        $data['updated_at'] = date('Y-m-d H:i:s');
        return $this->update($id, $data);
    }
}
