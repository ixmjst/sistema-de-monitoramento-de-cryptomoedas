<?php

/**
 * Bootstrap Configuration
 * Initializes the application environment and loads all configurations
 */

// Define base path
define('BASE_PATH', dirname(dirname(__FILE__)));
define('APP_PATH', BASE_PATH . '/src');
define('CONFIG_PATH', APP_PATH . '/Config');

// Load .env file
$envFile = dirname(BASE_PATH) . '/.env';
if (file_exists($envFile)) {
    $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos($line, '#') === 0) continue;
        if (strpos($line, '=') === false) continue;

        list($key, $value) = explode('=', $line, 2);
        $key = trim($key);
        $value = trim($value);

        if (!empty($key)) {
            putenv("$key=$value");
            $_ENV[$key] = $value;
            $_SERVER[$key] = $value;
        }
    }
}

// Set default values if not in .env
if (!getenv('DB_HOST')) putenv('DB_HOST=localhost');
if (!getenv('DB_PORT')) putenv('DB_PORT=3306');
if (!getenv('APP_ENV')) putenv('APP_ENV=development');
if (!getenv('API_PREFIX')) putenv('API_PREFIX=/api/v1');
if (!getenv('JWT_ALGORITHM')) putenv('JWT_ALGORITHM=HS256');
if (!getenv('JWT_EXPIRATION')) putenv('JWT_EXPIRATION=86400');

// CORS headers
if (isset($_SERVER['HTTP_ORIGIN'])) {
    $allowed = explode(',', getenv('CORS_ORIGIN') ?: 'http://localhost:4200');
    if (in_array($_SERVER['HTTP_ORIGIN'], $allowed) || in_array('*', $allowed)) {
        header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
        header('Access-Control-Allow-Methods: ' . (getenv('CORS_METHODS') ?: 'GET,POST,PUT,DELETE,OPTIONS'));
        header('Access-Control-Allow-Headers: ' . (getenv('CORS_HEADERS') ?: 'Content-Type,Authorization'));
        header('Access-Control-Allow-Credentials: true');

        // Handle preflight
        if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            http_response_code(200);
            exit;
        }
    }
}

// Create logs directory if not exists
$logsPath = getenv('LOG_PATH') ?: APP_PATH . '/logs';
if (!is_dir($logsPath)) {
    mkdir($logsPath, 0755, true);
}

return true;
