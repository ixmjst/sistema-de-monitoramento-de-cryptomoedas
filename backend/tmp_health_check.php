<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
try {
    $opts = ['http' => ['ignore_errors' => true]];
    $context = stream_context_create($opts);
    $urls = [
        'http://127.0.0.1:8000/api/v1/health',
        'http://[::1]:8000/api/v1/health'
    ];
    foreach ($urls as $url) {
        echo "URL: $url\n";
        $response = @file_get_contents($url, false, $context);
        echo "RESPONSE:\n";
        var_dump($response);
        echo "\n";
    }
} catch (Throwable $e) {
    echo 'ERROR: ' . $e->getMessage() . "\n";
}
