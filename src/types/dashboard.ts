export interface StockProps {
  adjusted: boolean;
  queryCount: number;
  request_id: string;
  results: Result[];
  resultsCount: number;
  status: string;
  ticker: string;
}

export interface Result {
  c: number;
  h: number;
  l: number;
  n: number;
  o: number;
  t: number;
  v: number;
  vw: number;
}

export interface TickerProps {
  AAPL: string;
  GOGL: string;
  AMAZ: string;
  TSLA: string;
}

export interface newStocksProps {
  ticker: string;
  name: string;
  brand: string;
}
