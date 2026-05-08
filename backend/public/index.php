<?php

/**
 * API Entry Point - CryptoMonitor Backend
 * 
 * This is the main entry point for all API requests.
 * All requests are routed through here.
 */

// Enable error reporting in development
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Set JSON response header
header('Content-Type: application/json; charset=utf-8');

// Load environment variables
$root = dirname(dirname(__FILE__));

// Load autoloader first
require_once $root . '/src/Config/autoload.php';

// Load configuration
$configPath = $root . '/src/Config/bootstrap.php';
if (file_exists($configPath)) {
    require_once $configPath;
}

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

// Remove leading/trailing slashes
$path = trim($path, '/');

try {
    // Route the request
    $router = new \App\Routing\Router();
    $router->route($method, $path);
} catch (\Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => getenv('APP_DEBUG') ? $e->getMessage() : 'Internal Server Error',
        'error' => getenv('APP_DEBUG') ? [
            'file' => $e->getFile(),
            'line' => $e->getLine(),
            'trace' => $e->getTrace()
        ] : null
    ]);
}
