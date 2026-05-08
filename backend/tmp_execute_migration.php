<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
require_once __DIR__ . '/src/Config/autoload.php';
require_once __DIR__ . '/src/Config/bootstrap.php';
try {
    $db = App\Config\Database::getInstance()->getConnection();
    $migrationsPath = __DIR__ . '/../database/migrations';
    $files = glob($migrationsPath . '/*.sql');
    sort($files);
    foreach ($files as $file) {
        echo "Running migration file: " . basename($file) . "\n";
        $sql = file_get_contents($file);
        $result = $db->exec($sql);
        echo "  exec result: " . var_export($result, true) . "\n";
    }
    $tstmt = $db->query('SHOW TABLES');
    $tables = $tstmt->fetchAll(PDO::FETCH_COLUMN);
    echo 'TABLES AFTER MIGRATIONS: ' . count($tables) . "\n";
    foreach ($tables as $t) {
        echo "- $t\n";
    }
} catch (Throwable $e) {
    echo 'ERROR: ' . $e->getMessage() . "\n";
}
