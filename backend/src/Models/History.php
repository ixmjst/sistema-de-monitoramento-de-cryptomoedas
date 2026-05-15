<?php

namespace App\Models;

class History extends BaseModel
{
    protected $table = 'history';

    public function getUserHistory($userId, $limit = 100)
    {
        $sql = "SELECT h.*, c.code as crypto_code, c.name as crypto_name, c.symbol as crypto_symbol
                FROM {$this->table} h
                LEFT JOIN cryptocurrencies c ON h.crypto_id = c.id
                WHERE h.user_id = ?
                ORDER BY h.created_at DESC
                LIMIT ?";
        $stmt = $this->query($sql, [$userId, $limit]);
        return $stmt->fetchAll();
    }

    public function addHistoryEntry($userId, $cryptoId, $action, $quantity = null, $price = null, $description = null)
    {
        $data = [
            'user_id' => $userId,
            'crypto_id' => $cryptoId,
            'action' => $action,
            'quantity' => $quantity,
            'price' => $price,
            'description' => $description,
            'created_at' => date('Y-m-d H:i:s')
        ];
        return $this->create($data);
    }

    public function getUserHistoryByAction($userId, $action, $limit = 50)
    {
        $sql = "SELECT h.*, c.name as crypto_name
                FROM {$this->table} h
                LEFT JOIN cryptocurrencies c ON h.crypto_id = c.id
                WHERE h.user_id = ? AND h.action = ?
                ORDER BY h.created_at DESC
                LIMIT ?";
        $stmt = $this->query($sql, [$userId, $action, $limit]);
        return $stmt->fetchAll();
    }

    public function getHistoryRange($userId, $startDate, $endDate)
    {
        $sql = "SELECT h.*, c.name as crypto_name
                FROM {$this->table} h
                LEFT JOIN cryptocurrencies c ON h.crypto_id = c.id
                WHERE h.user_id = ? AND h.created_at BETWEEN ? AND ?
                ORDER BY h.created_at DESC";
        $stmt = $this->query($sql, [$userId, $startDate, $endDate]);
        return $stmt->fetchAll();
    }

    public function getStats($userId = null)
    {
        $where = $userId ? "WHERE user_id = ?" : "";
        $params = $userId ? [$userId] : [];
        $sql = "SELECT COUNT(*) as total, COUNT(DISTINCT action) as action_types,
                MAX(created_at) as last_activity FROM {$this->table} $where";
        $stmt = $this->query($sql, $params);
        return $stmt->fetch();
    }
}
