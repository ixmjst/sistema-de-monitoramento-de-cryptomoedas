<?php
$pdo = new PDO(
    'mysql:host=localhost;dbname=crypto_monitor;charset=utf8mb4',
    'crypto_user',
    'senha123'
);
$stmt = $pdo->exec("UPDATE users SET role = 'admin' WHERE email = 'admin@crypto.com'");
if ($stmt) {
    echo "Utilizador admin@crypto.com promovido a admin com sucesso!\n";
} else {
    echo "Erro ao promover utilizador.\n";
}
