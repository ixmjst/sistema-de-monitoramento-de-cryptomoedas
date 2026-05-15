<?php

namespace App\Controllers;

use App\Middleware\AuthMiddleware;
use App\Models\User;
use App\Models\Cryptocurrency;
use App\Models\History;

class AdminController extends BaseController
{
    private $userModel;
    private $cryptoModel;
    private $historyModel;

    public function __construct()
    {
        parent::__construct();
        $this->userModel = new User();
        $this->cryptoModel = new Cryptocurrency();
        $this->historyModel = new History();
    }

    private function requireAdmin()
    {
        $user = AuthMiddleware::getUser();
        if (!$user || (($user['role'] ?? 'user') !== 'admin')) {
            $this->error('Admin access required', 403);
        }
        return $user;
    }

    public function dashboard()
    {
        $this->requireAdmin();

        $userStats = $this->userModel->getStats();
        $historyStats = $this->historyModel->getStats();

        // Efficient count via COUNT query
        $db = \App\Config\Database::getInstance()->getConnection();
        $cryptoCount = (int) $db->query("SELECT COUNT(*) FROM cryptocurrencies")->fetchColumn();

        // Top cryptos: prefer ranked, fallback to any with a price
        $topCryptos = $this->cryptoModel->getTopCryptos(5);
        if (empty($topCryptos)) {
            $stmt = $db->query(
                "SELECT * FROM cryptocurrencies WHERE current_price IS NOT NULL AND current_price > 0
                 ORDER BY market_cap DESC, id ASC LIMIT 5"
            );
            $topCryptos = $stmt ? $stmt->fetchAll(\PDO::FETCH_ASSOC) : [];
        }
        if (empty($topCryptos)) {
            $stmt = $db->query("SELECT * FROM cryptocurrencies ORDER BY id ASC LIMIT 5");
            $topCryptos = $stmt ? $stmt->fetchAll(\PDO::FETCH_ASSOC) : [];
        }

        // Recent history entries for the activity feed
        $recentStmt = $db->query(
            "SELECT h.action, h.created_at, u.name AS user_name, c.name AS crypto_name
             FROM history h
             LEFT JOIN users u ON u.id = h.user_id
             LEFT JOIN cryptocurrencies c ON c.id = h.crypto_id
             ORDER BY h.created_at DESC LIMIT 5"
        );
        $recentActivity = $recentStmt ? $recentStmt->fetchAll(\PDO::FETCH_ASSOC) : [];

        $this->success([
            'users' => $userStats,
            'cryptocurrencies' => [
                'total' => $cryptoCount,
                'top'   => $topCryptos,
            ],
            'history' => array_merge((array) $historyStats, ['recent' => $recentActivity]),
            'system' => [
                'php_version' => phpversion(),
                'server_time' => date('Y-m-d H:i:s'),
                'app_env'     => getenv('APP_ENV') ?: 'production',
            ]
        ], 'Admin dashboard data');
    }

    public function users()
    {
        $this->requireAdmin();
        $users = $this->userModel->getAllUsers();
        $this->success($users, 'Users retrieved');
    }

    public function updateUser($id)
    {
        $currentUser = $this->requireAdmin();
        $input = $this->getJsonInput() ?? [];

        $allowed = ['name', 'email', 'role'];
        $data = array_intersect_key($input, array_flip($allowed));

        if (isset($data['role']) && !in_array($data['role'], ['admin', 'user'], true)) {
            return $this->error('Invalid role', 422);
        }

        if (isset($data['role']) && $data['role'] !== 'admin' && (int) $currentUser['id'] === (int) $id) {
            return $this->error('You cannot demote your own admin account role', 422);
        }

        if (empty($data)) {
            return $this->error('No valid fields to update', 422);
        }

        $this->userModel->updateUser($id, $data);
        $this->success($this->userModel->getSafeUserById($id), 'User updated');
    }

    public function deleteUser($id)
    {
        $currentUser = $this->requireAdmin();
        if ((int) $currentUser['id'] === (int) $id) {
            return $this->error('You cannot deactivate your own admin account', 422);
        }

        $this->userModel->softDeleteUser($id);
        $this->success(null, 'User deactivated');
    }

    public function eliminateUser($id)
    {
        $currentUser = $this->requireAdmin();
        if ((int) $currentUser['id'] === (int) $id) {
            return $this->error('You cannot permanently delete your own admin account', 422);
        }

        $this->userModel->deleteUser($id);
        $this->success(null, 'User permanently deleted');
    }

    public function restoreUser($id)
    {
        $this->requireAdmin();
        $this->userModel->restoreUser($id);
        $this->success($this->userModel->getSafeUserById($id), 'User restored');
    }

    public function cryptocurrencies()
    {
        $this->requireAdmin();
        $page = (int)($this->getQueryParam('page') ?? 1);
        $limit = (int)($this->getQueryParam('limit') ?? 50);
        if ($page < 1) $page = 1;
        if ($limit < 1 || $limit > 100) $limit = 50;

        $data = $this->cryptoModel->paginate($page, $limit);
        $this->success($data, 'Cryptocurrencies retrieved');
    }

    public function updateCryptocurrency($id)
    {
        $this->requireAdmin();
        $input = $this->getJsonInput() ?? [];

        $allowed = ['name', 'symbol', 'current_price', 'image_url', 'market_cap', 'market_cap_rank', 'price_change_24h'];
        $data = array_intersect_key($input, array_flip($allowed));

        if (empty($data)) {
            return $this->error('No valid fields to update', 422);
        }

        $this->cryptoModel->update($id, $data);
        $this->success($this->cryptoModel->find($id), 'Cryptocurrency updated');
    }

    public function deleteCryptocurrency($id)
    {
        $this->requireAdmin();
        $this->cryptoModel->delete($id);
        $this->success(null, 'Cryptocurrency deleted');
    }

    public function systemInfo()
    {
        $this->requireAdmin();

        $db = \App\Config\Database::getInstance()->getConnection();
        $tables = $db->query("SHOW TABLE STATUS")->fetchAll();

        $tableInfo = [];
        foreach ($tables as $t) {
            $tableInfo[] = [
                'name' => $t['Name'],
                'rows' => $t['Rows'],
                'engine' => $t['Engine'],
                'size' => $t['Data_length'] + $t['Index_length']
            ];
        }

        $this->success([
            'php' => [
                'version' => phpversion(),
                'extensions' => get_loaded_extensions(),
                'memory_limit' => ini_get('memory_limit'),
                'max_upload' => ini_get('upload_max_filesize')
            ],
            'database' => $tableInfo,
            'environment' => getenv('APP_ENV') ?: 'production',
            'time' => date('Y-m-d H:i:s')
        ], 'System info');
    }

    public function createUser()
    {
        $this->requireAdmin();
        $input = $this->getJsonInput() ?? [];

        $errors = $this->validateInput($input, [
            'name'     => ['required' => true, 'type' => 'string'],
            'email'    => ['required' => true, 'type' => 'email'],
            'password' => ['required' => true, 'type' => 'string'],
        ]);

        if (!empty($errors)) {
            return $this->error('Validation failed', 422, $errors);
        }

        $email = strtolower(trim($input['email']));
        if ($this->userModel->getUserByEmail($email)) {
            return $this->error('Email already registered', 409);
        }

        $role = in_array($input['role'] ?? 'user', ['admin', 'user'], true) ? $input['role'] : 'user';

        $id = $this->userModel->createUser([
            'name'     => $input['name'],
            'email'    => $email,
            'password' => $input['password'],
            'role'     => $role,
            'language' => 'pt',
            'theme'    => 'dark',
        ]);

        $this->success($this->userModel->getSafeUserById($id), 'User created', 201);
    }

    public function createCryptocurrency()
    {
        $this->requireAdmin();
        $input = $this->getJsonInput() ?? [];

        $errors = $this->validateInput($input, [
            'name'   => ['required' => true, 'type' => 'string'],
            'symbol' => ['required' => true, 'type' => 'string'],
            'code'   => ['required' => true, 'type' => 'string'],
        ]);

        if (!empty($errors)) {
            return $this->error('Validation failed', 422, $errors);
        }

        $allowed = ['code', 'name', 'symbol', 'current_price', 'image_url', 'market_cap', 'market_cap_rank', 'price_change_24h'];
        $data = array_intersect_key($input, array_flip($allowed));

        $id = $this->cryptoModel->create($data);
        $this->success($this->cryptoModel->find($id), 'Cryptocurrency created', 201);
    }

    public function getPasswordResetRequests()
    {
        $this->requireAdmin();

        $db = \App\Config\Database::getInstance()->getConnection();
        $stmt = $db->query(
            "SELECT pr.id, pr.user_id, u.name AS user_name, u.email AS user_email,
                    pr.status, pr.created_at, pr.updated_at
             FROM password_resets pr
             JOIN users u ON u.id = pr.user_id
             WHERE pr.status = 'pending'
             ORDER BY pr.created_at DESC"
        );
        $requests = $stmt ? $stmt->fetchAll(\PDO::FETCH_ASSOC) : [];
        $this->success($requests, 'Password reset requests retrieved');
    }

    public function approvePasswordResetRequest($id)
    {
        $this->requireAdmin();

        $db = \App\Config\Database::getInstance()->getConnection();
        $stmt = $db->prepare("SELECT * FROM password_resets WHERE id = ? AND status = 'pending'");
        $stmt->execute([$id]);
        $request = $stmt->fetch(\PDO::FETCH_ASSOC);

        if (!$request) {
            return $this->error('Request not found or already processed', 404);
        }

        // Generate a one-time reset token
        $token = bin2hex(random_bytes(32));

        $upd = $db->prepare(
            "UPDATE password_resets SET status = 'approved', token = ?, expires_at = DATE_ADD(NOW(), INTERVAL 2 HOUR), updated_at = NOW() WHERE id = ?"
        );
        $upd->execute([$token, $id]);

        $this->success(['token' => $token], 'Request approved');
    }

    public function exportLogs()
    {
        $this->requireAdmin();

        $db = \App\Config\Database::getInstance()->getConnection();
        $stmt = $db->query(
            "SELECT h.id, u.name AS user_name, u.email, h.action, h.crypto_code, h.created_at
             FROM history h
             LEFT JOIN users u ON u.id = h.user_id
             ORDER BY h.created_at DESC
             LIMIT 10000"
        );
        $rows = $stmt ? $stmt->fetchAll(\PDO::FETCH_ASSOC) : [];

        header('Content-Type: text/csv; charset=utf-8');
        header('Content-Disposition: attachment; filename="logs_' . date('Y-m-d') . '.csv"');

        $out = fopen('php://output', 'w');
        fprintf($out, chr(0xEF) . chr(0xBB) . chr(0xBF)); // UTF-8 BOM
        fputcsv($out, ['ID', 'Utilizador', 'E-mail', 'Ação', 'Criptomoeda', 'Data']);
        foreach ($rows as $row) {
            fputcsv($out, [
                $row['id'],
                $row['user_name'] ?? '-',
                $row['email'] ?? '-',
                $row['action'] ?? '-',
                $row['crypto_code'] ?? '-',
                $row['created_at'] ?? '-',
            ]);
        }
        fclose($out);
        exit;
    }
}
