<?php

/**
 * Router - Routes HTTP requests to appropriate controllers
 */

namespace App\Routing;

class Router
{
    private $routes = [];

    public function __construct()
    {
        $this->registerRoutes();
    }

    private function registerRoutes()
    {
        // Auth routes
        $this->routes['POST']['/auth/register'] = ['controller' => 'AuthController', 'method' => 'register'];
        $this->routes['POST']['/auth/login'] = ['controller' => 'AuthController', 'method' => 'login'];
        $this->routes['POST']['/auth/refresh'] = ['controller' => 'AuthController', 'method' => 'refresh'];
        $this->routes['POST']['/auth/logout'] = ['controller' => 'AuthController', 'method' => 'logout'];
        $this->routes['GET']['/auth/me'] = ['controller' => 'AuthController', 'method' => 'me'];
        $this->routes['POST']['/auth/forgot-password'] = ['controller' => 'AuthController', 'method' => 'forgotPassword'];
        $this->routes['POST']['/auth/reset-password'] = ['controller' => 'AuthController', 'method' => 'resetPassword'];

        // Cryptocurrency routes
        $this->routes['GET']['/cryptocurrencies'] = ['controller' => 'CryptoController', 'method' => 'list'];
        $this->routes['GET']['/cryptocurrencies/(\d+)'] = ['controller' => 'CryptoController', 'method' => 'detail'];
        $this->routes['GET']['/cryptocurrencies/search/(.+)'] = ['controller' => 'CryptoController', 'method' => 'search'];

        // Favorites routes
        $this->routes['GET']['/favorites'] = ['controller' => 'FavoriteController', 'method' => 'list'];
        $this->routes['POST']['/favorites'] = ['controller' => 'FavoriteController', 'method' => 'create'];
        $this->routes['DELETE']['/favorites/(.+)'] = ['controller' => 'FavoriteController', 'method' => 'delete'];

        // Portfolio routes
        $this->routes['GET']['/portfolio'] = ['controller' => 'PortfolioController', 'method' => 'list'];
        $this->routes['POST']['/portfolio'] = ['controller' => 'PortfolioController', 'method' => 'create'];
        $this->routes['PUT']['/portfolio/(\d+)'] = ['controller' => 'PortfolioController', 'method' => 'update'];
        $this->routes['DELETE']['/portfolio/(\d+)'] = ['controller' => 'PortfolioController', 'method' => 'delete'];

        // History routes
        $this->routes['GET']['/history'] = ['controller' => 'HistoryController', 'method' => 'list'];
        $this->routes['POST']['/history'] = ['controller' => 'HistoryController', 'method' => 'create'];
        $this->routes['POST']['/history/import'] = ['controller' => 'HistoryController', 'method' => 'import'];
        $this->routes['GET']['/history/stats'] = ['controller' => 'HistoryController', 'method' => 'stats'];

        // Export routes
        $this->routes['GET']['/export/csv'] = ['controller' => 'ExportController', 'method' => 'csv'];
        $this->routes['GET']['/export/pdf'] = ['controller' => 'ExportController', 'method' => 'pdf'];

        // Admin routes
        $this->routes['GET']['/admin/dashboard'] = ['controller' => 'AdminController', 'method' => 'dashboard'];
        $this->routes['GET']['/admin/users'] = ['controller' => 'AdminController', 'method' => 'users'];
        $this->routes['POST']['/admin/users'] = ['controller' => 'AdminController', 'method' => 'createUser'];
        $this->routes['PUT']['/admin/users/(\d+)'] = ['controller' => 'AdminController', 'method' => 'updateUser'];
        $this->routes['DELETE']['/admin/users/(\d+)'] = ['controller' => 'AdminController', 'method' => 'deleteUser'];
        $this->routes['POST']['/admin/users/(\d+)/restore'] = ['controller' => 'AdminController', 'method' => 'restoreUser'];
        $this->routes['GET']['/admin/cryptocurrencies'] = ['controller' => 'AdminController', 'method' => 'cryptocurrencies'];
        $this->routes['POST']['/admin/cryptocurrencies'] = ['controller' => 'AdminController', 'method' => 'createCryptocurrency'];
        $this->routes['PUT']['/admin/cryptocurrencies/(\d+)'] = ['controller' => 'AdminController', 'method' => 'updateCryptocurrency'];
        $this->routes['DELETE']['/admin/cryptocurrencies/(\d+)'] = ['controller' => 'AdminController', 'method' => 'deleteCryptocurrency'];
        $this->routes['GET']['/admin/system'] = ['controller' => 'AdminController', 'method' => 'systemInfo'];
        $this->routes['GET']['/admin/password-reset-requests'] = ['controller' => 'AdminController', 'method' => 'getPasswordResetRequests'];
        $this->routes['POST']['/admin/password-reset-requests/(\d+)/approve'] = ['controller' => 'AdminController', 'method' => 'approvePasswordResetRequest'];
        $this->routes['GET']['/admin/logs/export'] = ['controller' => 'AdminController', 'method' => 'exportLogs'];

        // Health check
        $this->routes['GET']['/health'] = ['controller' => 'HealthController', 'method' => 'check'];
    }

    public function route($method, $path)
    {
        // Normalize path
        $path = '/' . trim($path, '/');

        if (!isset($this->routes[$method])) {
            $this->notFound("Route not found: $method $path");
            return;
        }

        foreach ($this->routes[$method] as $pattern => $route) {
            if ($this->matchRoute($pattern, $path, $params)) {
                return $this->dispatch($route['controller'], $route['method'], $params);
            }
        }

        $this->notFound("Route not found: $method $path");
    }

    private function matchRoute($pattern, $path, &$params = [])
    {
        $pattern = str_replace('\d', '[0-9]', $pattern);
        $pattern = preg_replace_callback('/\(([^)]+)\)/', function ($m) {
            return '(' . $m[1] . ')';
        }, $pattern);

        $regex = '#^' . $pattern . '$#';

        if (preg_match($regex, $path, $matches)) {
            array_shift($matches);
            $params = $matches;
            return true;
        }

        return false;
    }

    private function dispatch($controllerName, $method, $params = [])
    {
        $class = "App\\Controllers\\$controllerName";

        if (!class_exists($class)) {
            $this->notFound("Controller not found: $class");
            return;
        }

        $controller = new $class();

        if (!method_exists($controller, $method)) {
            $this->notFound("Method not found: $class::$method");
            return;
        }

        call_user_func_array([$controller, $method], $params);
    }

    private function notFound($message)
    {
        http_response_code(404);
        echo json_encode([
            'success' => false,
            'message' => $message
        ]);
    }
}
