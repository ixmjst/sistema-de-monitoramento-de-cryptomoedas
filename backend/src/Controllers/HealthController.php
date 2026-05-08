<?php

namespace App\Controllers;

class HealthController extends BaseController
{
    public function check()
    {
        try {
            $appVersion = getenv('APP_VERSION') ?? '1.0.0';
            $appEnv = getenv('APP_ENV') ?? 'production';

            $this->success([
                'status' => 'ok',
                'app' => 'CryptoMonitor API',
                'version' => $appVersion,
                'environment' => $appEnv,
                'timestamp' => date('Y-m-d H:i:s')
            ], 'API is healthy');
        } catch (\Exception $e) {
            $this->error('Health check failed: ' . $e->getMessage(), 503);
        }
    }
}
