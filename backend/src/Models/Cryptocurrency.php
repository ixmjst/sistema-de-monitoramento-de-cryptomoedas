<?php

namespace App\Models;

class Cryptocurrency extends BaseModel
{
    protected $table = 'cryptocurrencies';

    public function getAllCryptos()
    {
        return $this->all();
    }

    public function getCryptoById($id)
    {
        return $this->find($id);
    }

    public function getCryptoByCode($code)
    {
        $sql = "SELECT * FROM {$this->table} WHERE code = ?";
        $stmt = $this->query($sql, [$code]);
        return $stmt->fetch();
    }

    public function getCryptosBySymbol($symbol)
    {
        $sql = "SELECT * FROM {$this->table} WHERE symbol = ?";
        $stmt = $this->query($sql, [$symbol]);
        return $stmt->fetchAll();
    }

    public function searchCryptos($query)
    {
        $sql = "SELECT * FROM {$this->table} 
                WHERE name LIKE ? OR code LIKE ? OR symbol LIKE ? 
                LIMIT 20";
        $searchTerm = "%$query%";
        $stmt = $this->query($sql, [$searchTerm, $searchTerm, $searchTerm]);
        return $stmt->fetchAll();
    }

    public function getTopCryptos($limit = 50)
    {
        $limit = (int)$limit;
        $sql = "SELECT * FROM {$this->table} 
                WHERE market_cap_rank IS NOT NULL 
                ORDER BY market_cap_rank ASC 
                LIMIT $limit";
        $stmt = $this->query($sql);
        return $stmt->fetchAll();
    }

    public function createOrUpdateCrypto($data)
    {
        $existing = $this->getCryptoByCode($data['code']);

        if ($existing) {
            return $this->update($existing['id'], $data);
        }

        return $this->create($data);
    }

    public function getCryptoPaginated($page = 1, $perPage = 15)
    {
        return $this->paginate($page, $perPage);
    }
}
