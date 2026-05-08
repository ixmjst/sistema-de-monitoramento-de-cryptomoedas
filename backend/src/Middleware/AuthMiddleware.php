<?php

namespace App\Middleware;

use App\Utils\JWT;

/**
 * Authentication Middleware
 * Validates JWT tokens in Authorization header
 */
class AuthMiddleware
{
    private $publicRoutes = [
        'POST:/auth/register',
        'POST:/auth/login',
        'GET:/health'
    ];

    public static function authenticate()
    {
        $middleware = new self();
        return $middleware->verify();
    }

    public function verify()
    {
        $method = $_SERVER['REQUEST_METHOD'];
        $path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        $apiPrefix = getenv('API_PREFIX') ?: '/api/v1';

        if (strpos($path, $apiPrefix) === 0) {
            $path = substr($path, strlen($apiPrefix));
        }

        $path = '/' . trim($path, '/');
        $routeKey = "$method:$path";

        if ($this->isPublicRoute($routeKey)) {
            return null;
        }

        $authHeader = $_SERVER['HTTP_AUTHORIZATION'] ?? null;

        if (!$authHeader || !preg_match('/Bearer\s+(.+)/', $authHeader, $matches)) {
            http_response_code(401);
            echo json_encode([
                'success' => false,
                'message' => 'Missing or invalid authorization token'
            ]);
            exit;
        }

        $token = $matches[1];
        $payload = JWT::decode($token);

        if (!$payload) {
            http_response_code(401);
            echo json_encode([
                'success' => false,
                'message' => 'Invalid or expired token'
            ]);
            exit;
        }

        return $payload;
    }

    private function isPublicRoute($routeKey)
    {
        return in_array($routeKey, $this->publicRoutes);
    }

    public static function getUser()
    {
        $authHeader = $_SERVER['HTTP_AUTHORIZATION'] ?? null;

        if ($authHeader && preg_match('/Bearer\s+(.+)/', $authHeader, $matches)) {
            $payload = JWT::decode($matches[1]);
            return $payload ?: null;
        }

        return null;
    }
}
