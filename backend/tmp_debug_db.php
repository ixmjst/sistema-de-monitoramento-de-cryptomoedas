<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
require_once __DIR__ . '/src/Config/autoload.php';
require_once __DIR__ . '/src/Config/bootstrap.php';
try {
    $host = getenv('DB_HOST');
    $port = getenv('DB_PORT');
    $dbname = getenv('DB_NAME');
    $user = getenv('DB_USER');
    echo "DB_HOST=$host\nDB_PORT=$port\nDB_NAME=$dbname\nDB_USER=$user\n";
    $db = App\Config\Database::getInstance()->getConnection();
    $stmt = $db->query('SELECT DATABASE() AS db');
    echo 'Connected DB: ' . $stmt->fetchColumn() . "\n";
    $stmt = $db->query('SHOW TABLES');
    $tables = $stmt->fetchAll(PDO::FETCH_COLUMN);
    echo 'SHOW TABLES count: ' . count($tables) . "\n";
    foreach ($tables as $t) {
        echo "- $t\n";
    }
    $stmt = $db->prepare('SELECT table_name FROM information_schema.tables WHERE table_schema = ?');
    $stmt->execute([$dbname]);
    $infoTables = $stmt->fetchAll(PDO::FETCH_COLUMN);
    echo 'INFORMATION_SCHEMA count: ' . count($infoTables) . "\n";
    foreach ($infoTables as $t) {
        echo 'info: ' . $t . "\n";
    }
} catch (Throwable $e) {
    echo 'ERROR: ' . $e->getMessage() . "\n";
}
