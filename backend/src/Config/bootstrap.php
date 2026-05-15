<?php

/**
 * Bootstrap Configuration
 * Loads .env, sets CORS headers, handles OPTIONS preflight.
 * BASE_PATH and APP_PATH are defined in public/index.php before this file is loaded.
 */

// ── Load .env ────────────────────────────────────────────────────────────────
// Procura em backend/ primeiro; fallback para a raiz do projecto
$envCandidates = [
    BASE_PATH . '/.env',
    dirname(BASE_PATH) . '/.env',
];

foreach ($envCandidates as $envFile) {
    if (file_exists($envFile)) {
        $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($lines as $line) {
            $line = trim($line);
            if ($line === '' || $line[0] === '#') continue;
            if (strpos($line, '=') === false) continue;

            [$key, $value] = explode('=', $line, 2);
            $key   = trim($key);
            $value = trim($value);

            if ($key !== '') {
                putenv("$key=$value");
                $_ENV[$key]    = $value;
                $_SERVER[$key] = $value;
            }
        }
        break; // usa o primeiro ficheiro encontrado
    }
}

// ── Defaults ─────────────────────────────────────────────────────────────────
if (!getenv('DB_HOST'))        putenv('DB_HOST=localhost');
if (!getenv('DB_PORT'))        putenv('DB_PORT=3306');
if (!getenv('APP_ENV'))        putenv('APP_ENV=development');
if (!getenv('APP_DEBUG'))      putenv('APP_DEBUG=true');
if (!getenv('API_PREFIX'))     putenv('API_PREFIX=/api/v1');
if (!getenv('JWT_ALGORITHM'))  putenv('JWT_ALGORITHM=HS256');
if (!getenv('JWT_EXPIRATION')) putenv('JWT_EXPIRATION=86400');
if (!getenv('JWT_SECRET'))     putenv('JWT_SECRET=change-me-in-production');

// ── CORS ─────────────────────────────────────────────────────────────────────
$allowedOrigins = array_map('trim', explode(',', getenv('CORS_ORIGIN') ?: 'http://localhost:4200'));
$allowedMethods = getenv('CORS_METHODS') ?: 'GET,POST,PUT,DELETE,OPTIONS,PATCH';
$allowedHeaders = getenv('CORS_HEADERS') ?: 'Content-Type,Authorization,X-Requested-With';

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if ($origin !== '' && (in_array($origin, $allowedOrigins) || in_array('*', $allowedOrigins))) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
} else {
    // Em desenvolvimento permite tudo para não bloquear o Angular dev server
    if (getenv('APP_ENV') === 'development') {
        header('Access-Control-Allow-Origin: *');
    }
}

header('Access-Control-Allow-Methods: ' . $allowedMethods);
header('Access-Control-Allow-Headers: ' . $allowedHeaders);
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Max-Age: 3600');

// Responde imediatamente ao preflight OPTIONS
if (isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// ── Logs directory ────────────────────────────────────────────────────────────
$logsPath = BASE_PATH . '/logs';
if (!is_dir($logsPath)) {
    @mkdir($logsPath, 0755, true);
}

return true;
