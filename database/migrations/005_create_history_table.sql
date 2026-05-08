-- Migration: 005_Create_History_Table
-- Description: Create history table for tracking cryptocurrency price changes
-- Date: 2026-05-08

CREATE TABLE IF NOT EXISTS history (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    crypto_id INT NOT NULL,
    action VARCHAR(50) NOT NULL,
    old_value DECIMAL(20, 8),
    new_value DECIMAL(20, 8),
    quantity DECIMAL(20, 8),
    price DECIMAL(20, 8),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (crypto_id) REFERENCES cryptocurrencies(id) ON DELETE CASCADE,
    INDEX idx_user_id (user_id),
    INDEX idx_crypto_id (crypto_id),
    INDEX idx_action (action),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
