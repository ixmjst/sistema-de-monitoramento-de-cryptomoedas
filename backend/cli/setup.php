#!/usr/bin/env php
<?php
/**
 * Database Setup and Migration Runner
 * Usage: php cli/setup.php [command]
 * Commands:
 *   - migrate: Run all migrations
 *   - seed: Seed the database with sample data
 *   - reset: Drop all tables and run migrations again
 */

require_once dirname(__DIR__) . '/src/Config/autoload.php';
require_once dirname(__DIR__) . '/src/Config/bootstrap.php';

use App\Config\Database;

class DatabaseSetup
{
    private $db;
    private $migrationsPath;

    public function __construct()
    {
        try {
            $this->db = Database::getInstance()->getConnection();
            $this->migrationsPath = dirname(__DIR__) . '/database/migrations';

            if (!is_dir($this->migrationsPath)) {
                $rootPath = dirname(dirname(__DIR__));
                $rootMigrationsPath = $rootPath . '/database/migrations';

                if (is_dir($rootMigrationsPath)) {
                    $this->migrationsPath = $rootMigrationsPath;
                }
            }
        } catch (\Exception $e) {
            die("Database connection failed: " . $e->getMessage() . "\n");
        }
    }

    public function migrate()
    {
        echo "[*] Starting database migrations...\n";

        if (!is_dir($this->migrationsPath)) {
            die("Migrations folder not found: {$this->migrationsPath}\n");
        }

        $files = glob($this->migrationsPath . '/*.sql');
        sort($files);

        if (empty($files)) {
            echo "[-] No migration files found.\n";
            return;
        }

        foreach ($files as $file) {
            $this->runMigration($file);
        }

        echo "[+] All migrations completed successfully!\n";
    }

    private function runMigration($file)
    {
        $filename = basename($file);
        echo "[*] Running migration: $filename\n";

        try {
            $sql = file_get_contents($file);

            // Remove single-line comments and preserve SQL statements
            $cleanedSql = preg_replace('/^\s*--.*$/m', '', $sql);
            $statements = array_filter(
                array_map('trim', explode(';', $cleanedSql)),
                function ($stmt) {
                    return !empty($stmt);
                }
            );

            foreach ($statements as $statement) {
                $this->db->exec($statement . ';');
            }

            echo "    [✓] $filename completed\n";
        } catch (\Exception $e) {
            echo "    [✗] Error: " . $e->getMessage() . "\n";
            throw $e;
        }
    }

    public function seed()
    {
        echo "[*] Seeding database...\n";

        try {
            // Insert sample cryptocurrencies
            $cryptos = [
                ['code' => 'BTC', 'name' => 'Bitcoin', 'symbol' => 'BTC', 'market_cap_rank' => 1],
                ['code' => 'ETH', 'name' => 'Ethereum', 'symbol' => 'ETH', 'market_cap_rank' => 2],
                ['code' => 'BNB', 'name' => 'Binance Coin', 'symbol' => 'BNB', 'market_cap_rank' => 3],
                ['code' => 'XRP', 'name' => 'XRP', 'symbol' => 'XRP', 'market_cap_rank' => 4],
                ['code' => 'ADA', 'name' => 'Cardano', 'symbol' => 'ADA', 'market_cap_rank' => 5],
            ];

            foreach ($cryptos as $crypto) {
                $sql = "INSERT IGNORE INTO cryptocurrencies (code, name, symbol, market_cap_rank) 
                        VALUES (?, ?, ?, ?)";
                $stmt = $this->db->prepare($sql);
                $stmt->execute([$crypto['code'], $crypto['name'], $crypto['symbol'], $crypto['market_cap_rank']]);
            }

            echo "[+] Database seeding completed!\n";
        } catch (\Exception $e) {
            echo "[-] Seeding error: " . $e->getMessage() . "\n";
            throw $e;
        }
    }

    public function reset()
    {
        echo "[!] WARNING: This will drop all tables. Are you sure? (yes/no): ";
        $response = trim(fgets(STDIN));

        if ($response !== 'yes') {
            echo "[-] Reset cancelled.\n";
            return;
        }

        echo "[*] Dropping all tables...\n";

        try {
            // Disable foreign key checks
            $this->db->exec("SET FOREIGN_KEY_CHECKS=0;");

            // Get all tables
            $stmt = $this->db->query("SHOW TABLES;");
            $tables = $stmt->fetchAll(\PDO::FETCH_COLUMN);

            foreach ($tables as $table) {
                $this->db->exec("DROP TABLE IF EXISTS `$table`;");
                echo "    [✓] Dropped table: $table\n";
            }

            // Re-enable foreign key checks
            $this->db->exec("SET FOREIGN_KEY_CHECKS=1;");

            echo "[*] Running migrations...\n";
            $this->migrate();

            echo "[*] Seeding database...\n";
            $this->seed();

            echo "[+] Database reset completed!\n";
        } catch (\Exception $e) {
            echo "[-] Reset error: " . $e->getMessage() . "\n";
            throw $e;
        }
    }
}

// Command line interface
$command = $argv[1] ?? 'help';

$setup = new DatabaseSetup();

switch ($command) {
    case 'migrate':
        $setup->migrate();
        break;
    case 'seed':
        $setup->seed();
        break;
    case 'reset':
        $setup->reset();
        break;
    default:
        echo "Database Setup CLI\n";
        echo "==================\n\n";
        echo "Usage: php cli/setup.php [command]\n\n";
        echo "Commands:\n";
        echo "  migrate - Run all database migrations\n";
        echo "  seed    - Seed the database with sample data\n";
        echo "  reset   - Drop all tables and run migrations + seed\n";
        break;
}
