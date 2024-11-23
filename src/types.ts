export type BrokerType = "Flattrade" | "Shoonya" | "Zerodha";

export type TokenMapping = {
  [K in BrokerType]: string;
};

export interface UnderlyingTokenMap {
  [symbol: string]: TokenMapping;
}
