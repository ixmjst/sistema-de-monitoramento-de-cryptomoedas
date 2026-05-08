<?php

/**
 * Autoloader Configuration
 * PSR-4 compatible autoloader for the application
 */

class Autoloader
{
    private static $prefixes = [];

    public static function register()
    {
        spl_autoload_register([__CLASS__, 'load']);
    }

    public static function addNamespace($prefix, $path)
    {
        self::$prefixes[$prefix] = rtrim($path, '/');
    }

    public static function load($class)
    {
        foreach (self::$prefixes as $prefix => $path) {
            if (strpos($class, $prefix) === 0) {
                $relativeClass = substr($class, strlen($prefix) + 1);
                $file = $path . '/' . str_replace('\\', '/', $relativeClass) . '.php';

                if (file_exists($file)) {
                    require_once $file;
                    return true;
                }
            }
        }

        return false;
    }
}

// Register autoloader
Autoloader::register();

// Add namespaces
$baseAppPath = dirname(__DIR__);
Autoloader::addNamespace('App', $baseAppPath);
Autoloader::addNamespace('App\\Config', $baseAppPath . '/Config');
Autoloader::addNamespace('App\\Controllers', $baseAppPath . '/Controllers');
Autoloader::addNamespace('App\\Models', $baseAppPath . '/Models');
Autoloader::addNamespace('App\\Repositories', $baseAppPath . '/Repositories');
Autoloader::addNamespace('App\\Services', $baseAppPath . '/Services');
Autoloader::addNamespace('App\\Middleware', $baseAppPath . '/Middleware');
Autoloader::addNamespace('App\\Utils', $baseAppPath . '/Utils');
Autoloader::addNamespace('App\\Routing', $baseAppPath . '/Routing');
