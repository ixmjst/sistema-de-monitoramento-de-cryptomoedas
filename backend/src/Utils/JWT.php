<?php

namespace App\Utils;

/**
 * JWT - JSON Web Token Handler
 * Simple JWT implementation for authentication
 */
class JWT
{
    private static $algorithm = 'HS256';
    private static $secret = '';

    public static function init()
    {
        self::$secret = getenv('JWT_SECRET') ?: 'your_secret_key';
        self::$algorithm = getenv('JWT_ALGORITHM') ?: 'HS256';
    }

    public static function encode($payload)
    {
        if (empty(self::$secret)) {
            self::init();
        }

        $header = [
            'alg' => self::$algorithm,
            'typ' => 'JWT'
        ];

        $payload['iat'] = time();
        $payload['exp'] = time() + (int)(getenv('JWT_EXPIRATION') ?: 86400);

        $headerEncoded = self::base64urlEncode(json_encode($header));
        $payloadEncoded = self::base64urlEncode(json_encode($payload));

        $signature = self::sign("$headerEncoded.$payloadEncoded");
        $signatureEncoded = self::base64urlEncode($signature);

        return "$headerEncoded.$payloadEncoded.$signatureEncoded";
    }

    public static function decode($token)
    {
        if (empty(self::$secret)) {
            self::init();
        }

        try {
            $parts = explode('.', $token);

            if (count($parts) !== 3) {
                return null;
            }

            $headerEncoded = $parts[0];
            $payloadEncoded = $parts[1];
            $signatureEncoded = $parts[2];

            $payload = json_decode(self::base64urlDecode($payloadEncoded), true);

            if (!$payload) {
                return null;
            }

            if (isset($payload['exp']) && $payload['exp'] < time()) {
                return null;
            }

            $expectedSignature = self::base64urlEncode(
                self::sign("$headerEncoded.$payloadEncoded")
            );

            if (!hash_equals($signatureEncoded, $expectedSignature)) {
                return null;
            }

            return $payload;
        } catch (\Exception $e) {
            return null;
        }
    }

    public static function isExpired($token)
    {
        $payload = self::decode($token);
        return $payload === null;
    }

    private static function sign($message)
    {
        if (self::$algorithm === 'HS256') {
            return hash_hmac('sha256', $message, self::$secret, true);
        }

        return '';
    }

    private static function base64urlEncode($data)
    {
        return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
    }

    private static function base64urlDecode($data)
    {
        return base64_decode(strtr($data, '-_', '+/') . str_repeat('=', 4 - strlen($data) % 4));
    }
}

JWT::init();
