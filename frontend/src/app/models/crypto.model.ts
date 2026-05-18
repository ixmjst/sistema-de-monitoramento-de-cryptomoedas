export interface Cryptocurrency {
  id: string;
  code: string;
  name: string;
  symbol: string;
  currentPrice: number;
  priceChange24h: number;
  priceChangePercentage24h?: number;
  imageUrl?: string;
  marketCap?: number;
  marketCapRank?: number;
  volume24h?: number;
  high24h?: number;
  low24h?: number;
  circulatingSupply?: number;
  totalSupply?: number;
  maxSupply?: number;
  ath?: number;
  atl?: number;
}

export interface Favorite {
  id: number;
  user_id: number;
  crypto_code: string;
  name?: string;
  symbol?: string;
  current_price?: number;
  price_change_24h?: number;
  image_url?: string;
  market_cap?: number;
  created_at: string;
}

export interface PortfolioItem {
  id: number;
  userId: number;
  cryptoId: string;
  quantity: number;
  purchasePrice: number;
  purchaseDate: string;
  notes?: string;
  currentValue?: number;
  profitLoss?: number;
  profitLossPercentage?: number;
  cryptocurrency?: Cryptocurrency;
}

export interface HistoryItem {
  id: number;
  userId: number;
  cryptoId: string;
  action: string;
  oldValue?: number;
  newValue?: number;
  quantity?: number;
  price?: number;
  description?: string;
  createdAt: string;
  cryptocurrency?: Cryptocurrency;
}
