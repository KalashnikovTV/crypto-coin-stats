export interface Coin {
  id: string;
  icon: string;
  name: string;
  symbol: string;
  rank: number;
  price: number;
  priceBtc: number;
  volume: number;
  marketCap: number;
  availableSupply: number;
  totalSupply: number;
  priceChange1h: number;
  priceChange1d: number;
  priceChange1w: number;
  websiteUrl: string;
  twitterUrl: string;
  contractAddress?: string;
  decimals?: number;
  exp: string[];
}

export interface CoinAPI {
  meta: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    itemCount: number;
    limit: number;
    page: number;
    pageCount: number;
  }
  result: Coin[];
}

export interface FormatOptions {
  format: string;
  decimal?: number;
  ignore?: (string | number)[];
  replace?: string | number;
}
