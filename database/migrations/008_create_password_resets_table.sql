-- Migration: 008_create_password_resets_table
-- Description: Table for admin-approved password recovery requests
-- Date: 2026-05-17

CREATE TABLE IF NOT EXISTS password_resets (
    id          INT PRIMARY KEY AUTO_INCREMENT,
    user_id     INT NOT NULL,
    token       VARCHAR(128) NULL,
    status      ENUM('pending', 'approved', 'used', 'expired') NOT NULL DEFAULT 'pending',
    expires_at  TIMESTAMP NULL,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_token (token),
    INDEX idx_user_status (user_id, status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
