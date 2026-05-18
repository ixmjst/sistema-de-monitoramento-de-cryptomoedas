<?php
/**
 * Script de diagnóstico e correção da autenticação.
 * Executar via: php tmp_fix_auth.php
 */

define('BASE_PATH', __DIR__);
define('APP_PATH', __DIR__ . '/src');

// Carrega .env
$envFile = __DIR__ . '/.env';
if (file_exists($envFile)) {
    $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        $line = trim($line);
        if ($line === '' || $line[0] === '#' || strpos($line, '=') === false) continue;
        [$k, $v] = explode('=', $line, 2);
        putenv(trim($k) . '=' . trim($v));
    }
}

echo "=== CryptoMonitor Auth Diagnostic ===\n\n";

// 1. Verifica variáveis de ambiente
echo "1. Variáveis de ambiente:\n";
echo "   DB_HOST=" . getenv('DB_HOST') . "\n";
echo "   DB_PORT=" . getenv('DB_PORT') . "\n";
echo "   DB_NAME=" . getenv('DB_NAME') . "\n";
echo "   DB_USER=" . getenv('DB_USER') . "\n";
echo "   DB_PASSWORD=" . (getenv('DB_PASSWORD') ? '***' : '(vazio)') . "\n";
echo "   JWT_SECRET=" . (getenv('JWT_SECRET') ? '***' : '(vazio)') . "\n\n";

// 2. Testa ligação à base de dados
echo "2. Ligação à base de dados:\n";
try {
    $dsn = sprintf(
        'mysql:host=%s;port=%s;dbname=%s;charset=utf8mb4',
        getenv('DB_HOST') ?: 'localhost',
        getenv('DB_PORT') ?: '3306',
        getenv('DB_NAME')
    );
    $pdo = new PDO($dsn, getenv('DB_USER'), getenv('DB_PASSWORD'), [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    ]);
    echo "   ✓ Ligação bem-sucedida\n\n";
} catch (Exception $e) {
    echo "   ✗ ERRO: " . $e->getMessage() . "\n\n";
    exit(1);
}

// 3. Verifica tabela users
echo "3. Tabela users:\n";
try {
    $stmt = $pdo->query("SHOW TABLES LIKE 'users'");
    if ($stmt->rowCount() === 0) {
        echo "   ✗ Tabela 'users' não existe! Execute as migrations.\n\n";
        exit(1);
    }
    echo "   ✓ Tabela existe\n";

    // Verifica colunas
    $stmt = $pdo->query("DESCRIBE users");
    $cols = array_column($stmt->fetchAll(PDO::FETCH_ASSOC), 'Field');
    echo "   Colunas: " . implode(', ', $cols) . "\n";

    // Verifica coluna role
    if (!in_array('role', $cols)) {
        echo "   ⚠ Coluna 'role' em falta — a adicionar...\n";
        $pdo->exec("ALTER TABLE users ADD COLUMN role VARCHAR(20) NOT NULL DEFAULT 'user' AFTER theme");
        echo "   ✓ Coluna 'role' adicionada\n";
    } else {
        echo "   ✓ Coluna 'role' existe\n";
    }
    echo "\n";
} catch (Exception $e) {
    echo "   ✗ ERRO: " . $e->getMessage() . "\n\n";
    exit(1);
}

// 4. Conta utilizadores
echo "4. Utilizadores registados:\n";
$stmt = $pdo->query("SELECT COUNT(*) as total FROM users");
$total = $stmt->fetch(PDO::FETCH_ASSOC)['total'];
echo "   Total: $total\n\n";

// 5. Testa criação de utilizador de teste
echo "5. Teste de registo:\n";
$testEmail = 'test_' . time() . '@cryptomonitor.test';
$testPass  = 'senha123';
try {
    $hash = password_hash($testPass, PASSWORD_BCRYPT);
    $stmt = $pdo->prepare(
        "INSERT INTO users (name, email, password, language, theme, role, created_at, updated_at)
         VALUES (?, ?, ?, 'pt', 'dark', 'user', NOW(), NOW())"
    );
    $stmt->execute(['Utilizador Teste', $testEmail, $hash]);
    $newId = $pdo->lastInsertId();
    echo "   ✓ Utilizador criado com ID=$newId\n";

    // Testa login
    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([$testEmail]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    if ($user && password_verify($testPass, $user['password'])) {
        echo "   ✓ Verificação de password bem-sucedida\n";
    } else {
        echo "   ✗ Verificação de password falhou\n";
    }

    // Limpa utilizador de teste
    $pdo->prepare("DELETE FROM users WHERE id = ?")->execute([$newId]);
    echo "   ✓ Utilizador de teste removido\n\n";
} catch (Exception $e) {
    echo "   ✗ ERRO: " . $e->getMessage() . "\n\n";
}

echo "=== Diagnóstico concluído ===\n";
echo "Se tudo está ✓, o backend deve funcionar.\n";
echo "Certifique-se que o servidor PHP está a correr em localhost:8000:\n";
echo "  cd backend && php -S localhost:8000 -t public\n\n";
