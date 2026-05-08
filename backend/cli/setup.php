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
            $cryptos = [
                ['code' => 'bitcoin',        'name' => 'Bitcoin',         'symbol' => 'BTC',  'current_price' => 96500.00,  'price_change_24h' => 2.45,   'market_cap' => 1900000000000, 'market_cap_rank' => 1,  'image_url' => 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png'],
                ['code' => 'ethereum',       'name' => 'Ethereum',        'symbol' => 'ETH',  'current_price' => 3200.00,   'price_change_24h' => 1.82,   'market_cap' => 385000000000,  'market_cap_rank' => 2,  'image_url' => 'https://assets.coingecko.com/coins/images/279/large/ethereum.png'],
                ['code' => 'tether',         'name' => 'Tether',          'symbol' => 'USDT', 'current_price' => 1.00,      'price_change_24h' => 0.01,   'market_cap' => 120000000000,  'market_cap_rank' => 3,  'image_url' => 'https://assets.coingecko.com/coins/images/325/large/Tether.png'],
                ['code' => 'binancecoin',    'name' => 'BNB',             'symbol' => 'BNB',  'current_price' => 580.00,    'price_change_24h' => 0.95,   'market_cap' => 84000000000,   'market_cap_rank' => 4,  'image_url' => 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png'],
                ['code' => 'solana',         'name' => 'Solana',          'symbol' => 'SOL',  'current_price' => 185.00,    'price_change_24h' => 3.21,   'market_cap' => 85000000000,   'market_cap_rank' => 5,  'image_url' => 'https://assets.coingecko.com/coins/images/4128/large/solana.png'],
                ['code' => 'ripple',         'name' => 'XRP',             'symbol' => 'XRP',  'current_price' => 2.30,      'price_change_24h' => 1.15,   'market_cap' => 130000000000,  'market_cap_rank' => 6,  'image_url' => 'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png'],
                ['code' => 'dogecoin',       'name' => 'Dogecoin',        'symbol' => 'DOGE', 'current_price' => 0.38,      'price_change_24h' => -1.20,  'market_cap' => 55000000000,   'market_cap_rank' => 7,  'image_url' => 'https://assets.coingecko.com/coins/images/5/large/dogecoin.png'],
                ['code' => 'cardano',        'name' => 'Cardano',         'symbol' => 'ADA',  'current_price' => 0.85,      'price_change_24h' => 0.75,   'market_cap' => 30000000000,   'market_cap_rank' => 8,  'image_url' => 'https://assets.coingecko.com/coins/images/975/large/cardano.png'],
                ['code' => 'avalanche-2',    'name' => 'Avalanche',       'symbol' => 'AVAX', 'current_price' => 38.00,     'price_change_24h' => 2.10,   'market_cap' => 16000000000,   'market_cap_rank' => 9,  'image_url' => 'https://assets.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png'],
                ['code' => 'polkadot',       'name' => 'Polkadot',        'symbol' => 'DOT',  'current_price' => 8.50,      'price_change_24h' => -0.85,  'market_cap' => 12000000000,   'market_cap_rank' => 10, 'image_url' => 'https://assets.coingecko.com/coins/images/12171/large/polkadot.png'],
                ['code' => 'chainlink',      'name' => 'Chainlink',       'symbol' => 'LINK', 'current_price' => 18.00,     'price_change_24h' => 1.50,   'market_cap' => 11000000000,   'market_cap_rank' => 11, 'image_url' => 'https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png'],
                ['code' => 'uniswap',        'name' => 'Uniswap',         'symbol' => 'UNI',  'current_price' => 12.50,     'price_change_24h' => 1.80,   'market_cap' => 7500000000,    'market_cap_rank' => 12, 'image_url' => 'https://assets.coingecko.com/coins/images/12504/large/uniswap-uni.png'],
                ['code' => 'litecoin',       'name' => 'Litecoin',        'symbol' => 'LTC',  'current_price' => 95.00,     'price_change_24h' => 0.60,   'market_cap' => 7000000000,    'market_cap_rank' => 13, 'image_url' => 'https://assets.coingecko.com/coins/images/2/large/litecoin.png'],
                ['code' => 'stellar',        'name' => 'Stellar',         'symbol' => 'XLM',  'current_price' => 0.38,      'price_change_24h' => 0.45,   'market_cap' => 11000000000,   'market_cap_rank' => 14, 'image_url' => 'https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png'],
                ['code' => 'monero',         'name' => 'Monero',          'symbol' => 'XMR',  'current_price' => 165.00,    'price_change_24h' => -0.30,  'market_cap' => 3000000000,    'market_cap_rank' => 15, 'image_url' => 'https://assets.coingecko.com/coins/images/69/large/monero_logo.png'],
                ['code' => 'cosmos',         'name' => 'Cosmos',          'symbol' => 'ATOM', 'current_price' => 8.20,      'price_change_24h' => 1.20,   'market_cap' => 3200000000,    'market_cap_rank' => 16, 'image_url' => 'https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png'],
                ['code' => 'tron',           'name' => 'TRON',            'symbol' => 'TRX',  'current_price' => 0.22,      'price_change_24h' => 0.30,   'market_cap' => 19000000000,   'market_cap_rank' => 17, 'image_url' => 'https://assets.coingecko.com/coins/images/1094/large/tron-logo.png'],
                ['code' => 'shiba-inu',      'name' => 'Shiba Inu',       'symbol' => 'SHIB', 'current_price' => 0.000025,  'price_change_24h' => -2.10,  'market_cap' => 14000000000,   'market_cap_rank' => 18, 'image_url' => 'https://assets.coingecko.com/coins/images/11939/large/shiba.png'],
                ['code' => 'near',           'name' => 'NEAR Protocol',   'symbol' => 'NEAR', 'current_price' => 6.80,      'price_change_24h' => 2.50,   'market_cap' => 7200000000,    'market_cap_rank' => 19, 'image_url' => 'https://assets.coingecko.com/coins/images/10365/large/near.jpg'],
                ['code' => 'internet-computer','name' => 'Internet Computer','symbol' => 'ICP','current_price' => 12.00,    'price_change_24h' => -1.50,  'market_cap' => 5600000000,    'market_cap_rank' => 20, 'image_url' => 'https://assets.coingecko.com/coins/images/14495/large/Internet_Computer_logo.png'],
            ];

            $sql = "INSERT INTO cryptocurrencies (code, name, symbol, current_price, price_change_24h, market_cap, market_cap_rank, image_url, created_at, last_updated) 
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())
                    ON DUPLICATE KEY UPDATE 
                        current_price = VALUES(current_price),
                        price_change_24h = VALUES(price_change_24h),
                        market_cap = VALUES(market_cap),
                        image_url = VALUES(image_url),
                        last_updated = NOW()";

            $stmt = $this->db->prepare($sql);
            foreach ($cryptos as $crypto) {
                $stmt->execute([
                    $crypto['code'], $crypto['name'], $crypto['symbol'],
                    $crypto['current_price'], $crypto['price_change_24h'],
                    $crypto['market_cap'], $crypto['market_cap_rank'], $crypto['image_url']
                ]);
            }

            echo "[+] Inserted " . count($cryptos) . " cryptocurrencies.\n";
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
