-- Migration: 007_Cleanup_Tables
-- Description: Remove unnecessary fields from all tables
-- Date: 2026-05-16

-- Cleanup cryptocurrencies table
ALTER TABLE cryptocurrencies
  DROP COLUMN IF EXISTS description,
  DROP COLUMN IF EXISTS circulating_supply,
  DROP COLUMN IF EXISTS total_supply,
  DROP COLUMN IF EXISTS max_supply,
  DROP COLUMN IF EXISTS ath,
  DROP COLUMN IF EXISTS atl,
  DROP COLUMN IF EXISTS website,
  DROP COLUMN IF EXISTS price_change_percentage_24h,
  DROP COLUMN IF EXISTS last_updated;

-- Cleanup portfolio table
ALTER TABLE portfolio
  DROP COLUMN IF EXISTS notes,
  DROP COLUMN IF EXISTS current_value,
  DROP COLUMN IF EXISTS profit_loss,
  DROP COLUMN IF EXISTS profit_loss_percentage,
  DROP COLUMN IF EXISTS updated_at;

-- Cleanup users table
ALTER TABLE users
  DROP COLUMN IF EXISTS two_factor_enabled,
  DROP COLUMN IF EXISTS two_factor_secret,
  DROP COLUMN IF EXISTS email_verified_at,
  DROP COLUMN IF EXISTS language,
  DROP COLUMN IF EXISTS theme;
