<?php

/**
 * API Entry Point - CryptoMonitor Backend
 */

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Define base path before loading anything
define('BASE_PATH', dirname(__DIR__));
define('APP_PATH', BASE_PATH . '/src');

// Load autoloader first
require_once APP_PATH . '/Config/autoload.php';

// Load bootstrap (loads .env, sets CORS headers, handles OPTIONS preflight)
require_once APP_PATH . '/Config/bootstrap.php';

// Set JSON response header
header('Content-Type: application/json; charset=utf-8');

// Apply authentication middleware for protected routes
\App\Middleware\AuthMiddleware::authenticate();

// Get request method and path
$method = $_SERVER['REQUEST_METHOD'];
$requestPath = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Remove API prefix from path
$apiPrefix = getenv('API_PREFIX') ?: '/api/v1';
if (strpos($requestPath, $apiPrefix) === 0) {
    $path = substr($requestPath, strlen($apiPrefix));
} else {
    $path = $requestPath;
}

$path = trim($path, '/');

try {
    $router = new \App\Routing\Router();
    $router->route($method, $path);
} catch (\Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => getenv('APP_DEBUG') === 'true' ? $e->getMessage() : 'Internal Server Error',
        'error'   => getenv('APP_DEBUG') === 'true' ? [
            'file'  => $e->getFile(),
            'line'  => $e->getLine(),
        ] : null
    ]);
}
