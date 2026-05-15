-- Migration: 006_Add_User_Role
-- Description: Adds roles so the admin area can manage users safely.
-- Date: 2026-05-12

ALTER TABLE users
    ADD COLUMN role VARCHAR(20) NOT NULL DEFAULT 'user' AFTER theme,
    ADD INDEX idx_role (role);
