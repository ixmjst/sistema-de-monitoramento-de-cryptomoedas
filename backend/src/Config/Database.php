<?php

namespace App\Config;

use PDO;
use PDOException;

/**
 * Database Connection Handler
 * Singleton pattern for database connection
 */
class Database
{
    private static $instance = null;
    private $connection;

    private function __construct()
    {
        $this->connect();
    }

    public static function getInstance()
    {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    private function connect()
    {
        try {
            $driver = getenv('DB_DRIVER') ?: 'mysql';
            $host = getenv('DB_HOST') ?: 'localhost';
            $port = getenv('DB_PORT') ?: 3306;
            $dbname = getenv('DB_NAME');
            $user = getenv('DB_USER') ?: 'root';
            $password = getenv('DB_PASSWORD') ?: '';

            if (!$dbname) {
                throw new \Exception('Database connection failed: DB_NAME is not defined.');
            }

            if (!extension_loaded('pdo')) {
                throw new \Exception('Database connection failed: PHP PDO extension is not loaded.');
            }

            if (!extension_loaded("pdo_$driver")) {
                throw new \Exception('Database connection failed: PDO driver "' . $driver . '" is not loaded. Install/enable the corresponding PHP extension (for example, pdo_mysql).');
            }

            $dsn = "$driver:host=$host;port=$port;dbname=$dbname;charset=utf8mb4";

            $this->connection = new PDO(
                $dsn,
                $user,
                $password,
                [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                    PDO::ATTR_EMULATE_PREPARES => false,
                ]
            );
        } catch (PDOException $e) {
            error_log("Database Connection Error: " . $e->getMessage());
            throw new \Exception("Database connection failed: " . $e->getMessage());
        }
    }

    public function getConnection()
    {
        return $this->connection;
    }

    public function prepare($sql)
    {
        return $this->connection->prepare($sql);
    }

    public function execute($stmt, $params = [])
    {
        return $stmt->execute($params);
    }

    public function lastInsertId()
    {
        return $this->connection->lastInsertId();
    }

    public function beginTransaction()
    {
        return $this->connection->beginTransaction();
    }

    public function commit()
    {
        return $this->connection->commit();
    }

    public function rollBack()
    {
        return $this->connection->rollBack();
    }

    public function close()
    {
        $this->connection = null;
    }
}
