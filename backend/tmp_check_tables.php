<?php
require_once __DIR__ . '/src/Config/autoload.php';
require_once __DIR__ . '/src/Config/bootstrap.php';
$db = App\Config\Database::getInstance()->getConnection();
$stmt = $db->query('SHOW TABLES');
$tables = $stmt->fetchAll(PDO::FETCH_COLUMN);
foreach ($tables as $t) {
    echo "$t\n";
}
