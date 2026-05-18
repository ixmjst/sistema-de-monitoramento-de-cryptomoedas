<?php

namespace App\Controllers;

use App\Models\Cryptocurrency;

class CryptoController extends BaseController
{
    private $cryptoModel;

    public function __construct()
    {
        parent::__construct();
        $this->cryptoModel = new Cryptocurrency();
    }

    public function list()
    {
        $page = (int)($this->getQueryParam('page') ?? 1);
        $limit = (int)($this->getQueryParam('limit') ?? 50);

        if ($page < 1) $page = 1;
        if ($limit < 1 || $limit > 100) $limit = 50;

        $data = $this->cryptoModel->paginate($page, $limit);
        $this->success($data, 'Cryptocurrencies retrieved');
    }

    public function detail($id)
    {
        $crypto = $this->cryptoModel->find($id);

        if (!$crypto) {
            return $this->error('Cryptocurrency not found', 404);
        }

        $this->success($crypto, 'Cryptocurrency details retrieved');
    }

    public function search($query)
    {
        if (strlen(trim($query)) < 1) {
            return $this->error('Search query is required', 400);
        }

        $results = $this->cryptoModel->searchCryptos(urldecode($query));
        $this->success($results, 'Search results');
    }

    public function top()
    {
        $limit = (int)($this->getQueryParam('limit') ?? 50);
        if ($limit < 1 || $limit > 250) $limit = 50;

        $cryptos = $this->cryptoModel->getTopCryptos($limit);
        $this->success($cryptos, 'Top cryptocurrencies retrieved');
    }
}
