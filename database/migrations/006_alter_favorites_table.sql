-- Migration: 006_Alter_Favorites_Table
-- Description: Remove unnecessary fields, change crypto_id to crypto_code
-- Date: 2026-05-16

-- Recreate the favorites table with the new structure
-- First, migrate existing data to a temp table if needed
CREATE TABLE IF NOT EXISTS favorites_new (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    crypto_code VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY unique_user_crypto (user_id, crypto_code),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_user_id (user_id),
    INDEX idx_crypto_code (crypto_code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copy existing data (convert crypto_id to code via cryptocurrencies table)
INSERT IGNORE INTO favorites_new (id, user_id, crypto_code, created_at)
SELECT f.id, f.user_id, COALESCE(c.code, 'unknown'), f.created_at
FROM favorites f
LEFT JOIN cryptocurrencies c ON f.crypto_id = c.id;

-- Drop old table and rename new one
DROP TABLE IF EXISTS favorites_old;
ALTER TABLE favorites RENAME TO favorites_old;
ALTER TABLE favorites_new RENAME TO favorites;
DROP TABLE IF EXISTS favorites_old;
