-- Migration: 002_Create_Cryptocurrencies_Table
-- Description: Create cryptocurrencies reference table
-- Date: 2026-05-08

CREATE TABLE IF NOT EXISTS cryptocurrencies (
    id INT PRIMARY KEY AUTO_INCREMENT,
    code VARCHAR(10) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    symbol VARCHAR(10) NOT NULL,
    description TEXT,
    image_url VARCHAR(500),
    market_cap BIGINT,
    market_cap_rank INT,
    current_price DECIMAL(20, 8),
    price_change_24h DECIMAL(10, 2),
    price_change_percentage_24h DECIMAL(10, 2),
    circulating_supply BIGINT,
    total_supply BIGINT,
    max_supply BIGINT,
    ath DECIMAL(20, 8),
    atl DECIMAL(20, 8),
    website VARCHAR(500),
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_code (code),
    INDEX idx_name (name),
    INDEX idx_market_cap_rank (market_cap_rank)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
