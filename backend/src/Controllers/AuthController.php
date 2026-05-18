<?php

namespace App\Controllers;

use App\Models\User;
use App\Utils\JWT;
use App\Middleware\AuthMiddleware;

class AuthController extends BaseController
{
    private $userModel;

    public function __construct()
    {
        parent::__construct();
        $this->userModel = new User();
    }

    public function register()
    {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            return $this->error('Method not allowed', 405);
        }

        $input = $this->getJsonInput();

        $errors = $this->validateInput($input, [
            'name' => ['required' => true, 'type' => 'string'],
            'email' => ['required' => true, 'type' => 'email'],
            'password' => ['required' => true, 'type' => 'string']
        ]);

        if (!empty($errors)) {
            return $this->error('Validation failed', 422, $errors);
        }

        if (strlen($input['password']) < 6) {
            return $this->error('Password must be at least 6 characters', 422);
        }

        $email = strtolower(trim($input['email']));
        $existingUser = $this->userModel->getUserByEmail($email);
        if ($existingUser) {
            return $this->error('Email already registered', 409);
        }

        try {
            $userId = $this->userModel->createUser([
                'name' => $input['name'],
                'email' => $email,
                'password' => $input['password'],
                'language' => $input['language'] ?? 'pt',
                'theme' => $input['theme'] ?? 'dark',
                'role' => 'user'
            ]);

            $user = $this->userModel->getUserById($userId);
            unset($user['password']);

            $token = JWT::encode([
                'id' => $user['id'],
                'email' => $user['email'],
                'name' => $user['name'],
                'role' => $user['role'] ?? 'user'
            ]);

            $this->success([
                'user' => $user,
                'token' => $token
            ], 'User registered successfully', 201);
        } catch (\Exception $e) {
            $this->error('Registration failed: ' . $e->getMessage(), 500);
        }
    }

    public function login()
    {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            return $this->error('Method not allowed', 405);
        }

        $input = $this->getJsonInput();

        $errors = $this->validateInput($input, [
            'email' => ['required' => true, 'type' => 'email'],
            'password' => ['required' => true, 'type' => 'string']
        ]);

        if (!empty($errors)) {
            return $this->error('Validation failed', 422, $errors);
        }

        $email = strtolower(trim($input['email']));

        if (!$this->userModel->verifyPassword($email, $input['password'])) {
            return $this->error('Email ou senha inválidos. Verifique os dados e tente novamente.', 401);
        }

        $user = $this->userModel->getUserByEmail($email);
        $this->userModel->updateLastLogin($user['id']);

        unset($user['password']);

        $token = JWT::encode([
            'id' => $user['id'],
            'email' => $user['email'],
            'name' => $user['name'],
            'role' => $user['role'] ?? 'user'
        ]);

        $this->success([
            'user' => $user,
            'token' => $token
        ], 'Login successful');
    }

    public function me()
    {
        $user = AuthMiddleware::getUser();

        if (!$user) {
            return $this->error('Unauthorized', 401);
        }

        $userData = $this->userModel->getUserById($user['id']);
        unset($userData['password']);

        $this->success($userData, 'User data retrieved');
    }

    public function refresh()
    {
        $user = AuthMiddleware::getUser();

        if (!$user) {
            return $this->error('Unauthorized', 401);
        }

        $newToken = JWT::encode([
            'id' => $user['id'],
            'email' => $user['email'],
            'name' => $user['name'],
            'role' => $user['role'] ?? 'user'
        ]);

        $this->success([
            'token' => $newToken
        ], 'Token refreshed');
    }

    public function logout()
    {
        $this->success(null, 'Logged out successfully');
    }

    public function forgotPassword()
    {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            return $this->error('Method not allowed', 405);
        }

        $input = $this->getJsonInput();
        $email = strtolower(trim($input['email'] ?? ''));

        if (!$email || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return $this->error('E-mail inválido', 422);
        }

        $user = $this->userModel->getUserByEmail($email);

        // Always return success to avoid user enumeration
        if ($user) {
            $db = \App\Config\Database::getInstance()->getConnection();

            // Invalidate previous pending requests for this user
            $db->prepare("UPDATE password_resets SET status = 'expired' WHERE user_id = ? AND status = 'pending'")
               ->execute([$user['id']]);

            $db->prepare(
                "INSERT INTO password_resets (user_id, status, created_at, updated_at) VALUES (?, 'pending', NOW(), NOW())"
            )->execute([$user['id']]);
        }

        $this->success(
            ['message' => 'Se o e-mail existir, um pedido de recuperação foi criado.'],
            'Password reset request submitted'
        );
    }

    public function resetPassword()
    {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            return $this->error('Method not allowed', 405);
        }

        $input = $this->getJsonInput();
        $token    = $input['token'] ?? '';
        $password = $input['password'] ?? '';

        if (!$token || strlen($password) < 6) {
            return $this->error('Token e senha são obrigatórios (mínimo 6 caracteres)', 422);
        }

        $db = \App\Config\Database::getInstance()->getConnection();
        $stmt = $db->prepare(
            "SELECT * FROM password_resets WHERE token = ? AND status = 'approved' AND expires_at > NOW()"
        );
        $stmt->execute([$token]);
        $request = $stmt->fetch(\PDO::FETCH_ASSOC);

        if (!$request) {
            return $this->error('Token inválido ou expirado', 400);
        }

        $this->userModel->updateUser($request['user_id'], ['password' => $password]);

        $db->prepare("UPDATE password_resets SET status = 'used', updated_at = NOW() WHERE id = ?")
           ->execute([$request['id']]);

        $this->success(null, 'Senha redefinida com sucesso');
    }
}
