<?php

namespace App\Models;

class User extends BaseModel
{
    protected $table = 'users';

    public function getAllUsers()
    {
        $sql = "SELECT id, name, email, role, last_login, created_at, updated_at, deleted_at
                FROM {$this->table}
                ORDER BY created_at DESC";
        $stmt = $this->query($sql);
        return $stmt->fetchAll();
    }

    public function getUserById($id)
    {
        return $this->find($id);
    }

    public function getSafeUserById($id)
    {
        $sql = "SELECT id, name, email, role, last_login, created_at, updated_at
                FROM {$this->table}
                WHERE id = ?";
        $stmt = $this->query($sql, [$id]);
        return $stmt->fetch();
    }

    public function getUserByEmail($email)
    {
        $sql = "SELECT * FROM {$this->table} WHERE email = ?";
        $stmt = $this->query($sql, [$email]);
        return $stmt->fetch();
    }

    public function createUser($data)
    {
        $data['password'] = password_hash($data['password'], PASSWORD_BCRYPT);
        $data['created_at'] = date('Y-m-d H:i:s');
        $data['updated_at'] = date('Y-m-d H:i:s');
        return $this->create($data);
    }

    public function updateUser($id, $data)
    {
        if (isset($data['password'])) {
            $data['password'] = password_hash($data['password'], PASSWORD_BCRYPT);
        }
        $data['updated_at'] = date('Y-m-d H:i:s');
        return $this->update($id, $data);
    }

    public function deleteUser($id)
    {
        return $this->delete($id);
    }

    public function softDeleteUser($id)
    {
        $sql = "UPDATE {$this->table} SET deleted_at = NOW(), updated_at = NOW() WHERE id = ?";
        $stmt = $this->query($sql, [$id]);
        return $stmt->execute();
    }

    public function restoreUser($id)
    {
        $sql = "UPDATE {$this->table} SET deleted_at = NULL, updated_at = NOW() WHERE id = ?";
        $stmt = $this->query($sql, [$id]);
        return $stmt->execute();
    }

    public function verifyPassword($email, $password)
    {
        $user = $this->getUserByEmail($email);
        if (!$user) return false;
        if (password_verify($password, $user['password'])) return true;
        if (password_get_info($user['password'])['algo'] === 0 && hash_equals($user['password'], $password)) {
            $this->updateUser($user['id'], ['password' => $password]);
            return true;
        }
        return false;
    }

    public function updateLastLogin($userId)
    {
        $sql = "UPDATE {$this->table} SET last_login = NOW() WHERE id = ?";
        $stmt = $this->query($sql, [$userId]);
        return $stmt->execute();
    }

    public function getStats()
    {
        $sql = "SELECT
                COUNT(*) as total_users,
                SUM(CASE WHEN role = 'admin' THEN 1 ELSE 0 END) as total_admins,
                SUM(CASE WHEN deleted_at IS NOT NULL THEN 1 ELSE 0 END) as total_inactive,
                SUM(CASE WHEN deleted_at IS NULL THEN 1 ELSE 0 END) as total_active,
                MAX(last_login) as last_login_any
                FROM {$this->table}";
        $stmt = $this->query($sql);
        return $stmt->fetch();
    }
}
