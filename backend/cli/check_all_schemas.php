<?php
define('BASE_PATH', dirname(__DIR__));
define('APP_PATH', BASE_PATH . '/src');
require APP_PATH . '/Config/autoload.php';
require APP_PATH . '/Config/bootstrap.php';

$db = \App\Config\Database::getInstance()->getConnection();
$tables = $db->query("SHOW TABLES")->fetchAll(\PDO::FETCH_COLUMN);
foreach ($tables as $table) {
    echo "=== $table ===\n";
    $stmt = $db->query("DESCRIBE $table");
    $cols = $stmt->fetchAll(\PDO::FETCH_ASSOC);
    foreach ($cols as $col) {
        echo "  {$col['Field']} ({$col['Type']})" . ($col['Null'] === 'YES' ? ' NULL' : ' NOT NULL') . ($col['Key'] ? ' [' . $col['Key'] . ']' : '') . ($col['Default'] !== null ? ' default=' . $col['Default'] : '') . ($col['Extra'] ? ' ' . $col['Extra'] : '') . "\n";
    }
    echo "\n";
}
