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

        $existingUser = $this->userModel->getUserByEmail($input['email']);
        if ($existingUser) {
            return $this->error('Email already registered', 409);
        }

        try {
            $userId = $this->userModel->createUser([
                'name' => $input['name'],
                'email' => $input['email'],
                'password' => $input['password'],
                'language' => $input['language'] ?? 'pt',
                'theme' => $input['theme'] ?? 'dark'
            ]);

            $user = $this->userModel->getUserById($userId);
            unset($user['password']);

            $token = JWT::encode([
                'id' => $user['id'],
                'email' => $user['email'],
                'name' => $user['name']
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

        if (!$this->userModel->verifyPassword($input['email'], $input['password'])) {
            return $this->error('Invalid email or password', 401);
        }

        $user = $this->userModel->getUserByEmail($input['email']);
        $this->userModel->updateLastLogin($user['id']);

        unset($user['password']);

        $token = JWT::encode([
            'id' => $user['id'],
            'email' => $user['email'],
            'name' => $user['name']
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
            'name' => $user['name']
        ]);

        $this->success([
            'token' => $newToken
        ], 'Token refreshed');
    }

    public function logout()
    {
        $this->success(null, 'Logged out successfully');
    }
}
