<?php

namespace App\Utils;

/**
 * Logger - Application Logging Utility
 */
class Logger
{
    private static $logPath;

    public static function init()
    {
        self::$logPath = getenv('LOG_PATH') ?: dirname(__DIR__) . '/../logs';

        if (!is_dir(self::$logPath)) {
            mkdir(self::$logPath, 0755, true);
        }
    }

    public static function info($message, $data = null)
    {
        self::log('INFO', $message, $data);
    }

    public static function error($message, $data = null)
    {
        self::log('ERROR', $message, $data);
    }

    public static function debug($message, $data = null)
    {
        if (getenv('APP_DEBUG') === 'true') {
            self::log('DEBUG', $message, $data);
        }
    }

    public static function warning($message, $data = null)
    {
        self::log('WARNING', $message, $data);
    }

    private static function log($level, $message, $data = null)
    {
        if (empty(self::$logPath)) {
            self::init();
        }

        $date = date('Y-m-d H:i:s');
        $file = self::$logPath . '/' . date('Y-m-d') . '.log';

        $logMessage = "[$date] [$level] $message";

        if ($data) {
            $logMessage .= " | " . json_encode($data, JSON_UNESCAPED_UNICODE);
        }

        $logMessage .= "\n";

        error_log($logMessage, 3, $file);
    }
}

Logger::init();
