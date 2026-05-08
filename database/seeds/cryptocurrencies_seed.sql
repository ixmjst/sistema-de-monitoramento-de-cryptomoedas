-- Seed: Cryptocurrencies
-- Dados iniciais de criptomoedas para desenvolvimento

INSERT INTO cryptocurrencies (code, name, symbol, current_price, price_change_24h, market_cap, market_cap_rank, image_url, circulating_supply, created_at, last_updated)
VALUES
('bitcoin',       'Bitcoin',       'BTC',  96500.00,   2.45,  1900000000000, 1,  'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',       19700000,  NOW(), NOW()),
('ethereum',      'Ethereum',      'ETH',   3200.00,   1.82,   385000000000, 2,  'https://assets.coingecko.com/coins/images/279/large/ethereum.png',   120000000, NOW(), NOW()),
('tether',        'Tether',        'USDT',     1.00,   0.01,   120000000000, 3,  'https://assets.coingecko.com/coins/images/325/large/Tether.png',  120000000000, NOW(), NOW()),
('binancecoin',   'BNB',           'BNB',    580.00,   0.95,    84000000000, 4,  'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png', 145000000, NOW(), NOW()),
('solana',        'Solana',        'SOL',    185.00,   3.21,    85000000000, 5,  'https://assets.coingecko.com/coins/images/4128/large/solana.png',   460000000, NOW(), NOW()),
('usd-coin',      'USD Coin',      'USDC',     1.00,   0.02,    45000000000, 6,  'https://assets.coingecko.com/coins/images/6319/large/usdc.png',   45000000000, NOW(), NOW()),
('ripple',        'XRP',           'XRP',      2.30,   1.15,   130000000000, 7,  'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png', 57000000000, NOW(), NOW()),
('dogecoin',      'Dogecoin',      'DOGE',     0.38,  -1.20,    55000000000, 8,  'https://assets.coingecko.com/coins/images/5/large/dogecoin.png',  145000000000, NOW(), NOW()),
('cardano',       'Cardano',       'ADA',      0.85,   0.75,    30000000000, 9,  'https://assets.coingecko.com/coins/images/975/large/cardano.png',  35000000000, NOW(), NOW()),
('avalanche-2',   'Avalanche',     'AVAX',    38.00,   2.10,    16000000000, 10, 'https://assets.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png', 410000000, NOW(), NOW()),
('polkadot',      'Polkadot',      'DOT',      8.50,  -0.85,    12000000000, 11, 'https://assets.coingecko.com/coins/images/12171/large/polkadot.png', 1400000000, NOW(), NOW()),
('chainlink',     'Chainlink',     'LINK',    18.00,   1.50,    11000000000, 12, 'https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png', 600000000, NOW(), NOW()),
('tron',          'TRON',          'TRX',      0.22,   0.30,    19000000000, 13, 'https://assets.coingecko.com/coins/images/1094/large/tron-logo.png', 87000000000, NOW(), NOW()),
('shiba-inu',     'Shiba Inu',     'SHIB',  0.000025,  -2.10,   14000000000, 14, 'https://assets.coingecko.com/coins/images/11939/large/shiba.png', 589000000000000, NOW(), NOW()),
('litecoin',      'Litecoin',      'LTC',     95.00,   0.60,     7000000000, 15, 'https://assets.coingecko.com/coins/images/2/large/litecoin.png',   74000000, NOW(), NOW()),
('uniswap',       'Uniswap',       'UNI',     12.50,   1.80,     7500000000, 16, 'https://assets.coingecko.com/coins/images/12504/large/uniswap-uni.png', 600000000, NOW(), NOW()),
('stellar',       'Stellar',       'XLM',      0.38,   0.45,    11000000000, 17, 'https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png', 29000000000, NOW(), NOW()),
('monero',        'Monero',        'XMR',    165.00,  -0.30,     3000000000, 18, 'https://assets.coingecko.com/coins/images/69/large/monero_logo.png', 18500000, NOW(), NOW()),
('ethereum-classic','Ethereum Classic','ETC',  28.00,   0.90,     4000000000, 19, 'https://assets.coingecko.com/coins/images/453/large/ethereum-classic-logo.png', 147000000, NOW(), NOW()),
('cosmos',        'Cosmos',        'ATOM',     8.20,   1.20,     3200000000, 20, 'https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png', 390000000, NOW(), NOW())
ON DUPLICATE KEY UPDATE
    current_price = VALUES(current_price),
    price_change_24h = VALUES(price_change_24h),
    market_cap = VALUES(market_cap),
     last_updated= NOW();
