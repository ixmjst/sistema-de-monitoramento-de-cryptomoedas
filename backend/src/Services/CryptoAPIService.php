<?php

namespace App\Services;

/**
 * CryptoAPI Service
 * Integrates with external cryptocurrency APIs
 */
class CryptoAPIService
{
    private $coingeckoUrl = 'https://api.coingecko.com/api/v3';
    private $cryptoCompareKey;

    public function __construct()
    {
        $this->cryptoCompareKey = getenv('CRYPTOCOMPARE_API_KEY');
        $this->coingeckoUrl = getenv('COINGECKO_API_URL') ?: $this->coingeckoUrl;
    }

    /**
     * Get cryptocurrency data from CoinGecko API
     */
    public function getCryptocurrencies($order = 'market_cap_desc', $perPage = 50, $page = 1)
    {
        try {
            $url = $this->coingeckoUrl . '/coins/markets?vs_currency=usd&order=' . $order .
                '&per_page=' . $perPage . '&page=' . $page . '&sparkline=false&locale=en';

            $response = $this->makeRequest($url);

            if (!$response) {
                return [];
            }

            return $this->transformCoinGeckoData($response);
        } catch (\Exception $e) {
            error_log("CoinGecko API Error: " . $e->getMessage());
            return [];
        }
    }

    /**
     * Search for cryptocurrency
     */
    public function searchCryptocurrency($query)
    {
        try {
            $url = $this->coingeckoUrl . '/search?query=' . urlencode($query);

            $response = $this->makeRequest($url);

            if (!$response || !isset($response['coins'])) {
                return [];
            }

            $results = [];
            foreach (array_slice($response['coins'], 0, 10) as $coin) {
                $results[] = [
                    'id' => $coin['id'],
                    'name' => $coin['name'],
                    'symbol' => strtoupper($coin['symbol']),
                    'image' => $coin['thumb']
                ];
            }

            return $results;
        } catch (\Exception $e) {
            error_log("CoinGecko Search Error: " . $e->getMessage());
            return [];
        }
    }

    /**
     * Get cryptocurrency details
     */
    public function getCryptocurrencyDetail($cryptoId)
    {
        try {
            $url = $this->coingeckoUrl . '/coins/' . $cryptoId . '?localization=false&sparkline=false';

            $response = $this->makeRequest($url);

            if (!$response) {
                return null;
            }

            return $this->transformCoinGeckoDetail($response);
        } catch (\Exception $e) {
            error_log("CoinGecko Detail Error: " . $e->getMessage());
            return null;
        }
    }

    /**
     * Get cryptocurrency price history
     */
    public function getPriceHistory($cryptoId, $days = 7)
    {
        try {
            $url = $this->coingeckoUrl . '/coins/' . $cryptoId .
                '/market_chart?vs_currency=usd&days=' . $days;

            $response = $this->makeRequest($url);

            if (!$response || !isset($response['prices'])) {
                return [];
            }

            return [
                'prices' => $response['prices'],
                'market_caps' => $response['market_caps'] ?? [],
                'volumes' => $response['volumes'] ?? []
            ];
        } catch (\Exception $e) {
            error_log("CoinGecko Price History Error: " . $e->getMessage());
            return [];
        }
    }

    private function makeRequest($url, $timeout = 30)
    {
        try {
            $context = stream_context_create([
                'http' => [
                    'method' => 'GET',
                    'timeout' => $timeout,
                    'header' => 'User-Agent: CryptoMonitor-API/1.0'
                ],
                'https' => [
                    'method' => 'GET',
                    'timeout' => $timeout,
                    'header' => 'User-Agent: CryptoMonitor-API/1.0'
                ]
            ]);

            $response = @file_get_contents($url, false, $context);

            if ($response === false) {
                return null;
            }

            return json_decode($response, true);
        } catch (\Exception $e) {
            error_log("HTTP Request Error: " . $e->getMessage());
            return null;
        }
    }

    private function transformCoinGeckoData($data)
    {
        $transformed = [];

        foreach ($data as $coin) {
            $transformed[] = [
                'code' => strtoupper($coin['symbol']),
                'name' => $coin['name'],
                'symbol' => strtoupper($coin['symbol']),
                'image_url' => $coin['image'],
                'current_price' => $coin['current_price'],
                'market_cap' => $coin['market_cap'],
                'market_cap_rank' => $coin['market_cap_rank'],
                'price_change_24h' => $coin['price_change_24h'],
                'price_change_percentage_24h' => $coin['price_change_percentage_24h'],
                'circulating_supply' => $coin['circulating_supply'],
                'total_supply' => $coin['total_supply'],
                'ath' => $coin['ath'],
                'atl' => $coin['atl']
            ];
        }

        return $transformed;
    }

    private function transformCoinGeckoDetail($data)
    {
        return [
            'code' => strtoupper($data['symbol']),
            'name' => $data['name'],
            'symbol' => strtoupper($data['symbol']),
            'description' => $data['description']['en'] ?? null,
            'image_url' => $data['image']['large'],
            'current_price' => $data['market_data']['current_price']['usd'] ?? null,
            'market_cap' => $data['market_data']['market_cap']['usd'] ?? null,
            'market_cap_rank' => $data['market_cap_rank'],
            'price_change_24h' => $data['market_data']['price_change_24h'] ?? null,
            'price_change_percentage_24h' => $data['market_data']['price_change_percentage_24h'] ?? null,
            'ath' => $data['market_data']['ath']['usd'] ?? null,
            'atl' => $data['market_data']['atl']['usd'] ?? null,
            'website' => $data['links']['homepage'][0] ?? null
        ];
    }
}
