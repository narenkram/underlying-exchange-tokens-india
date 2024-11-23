export * from "./types";
export * from "./constants";
import { UNDERLYING_TOKEN_MAP } from "./constants";
import type { BrokerType } from "./types";

/**
 * Get the exchange token for a given symbol and broker
 * @param symbol The underlying symbol (e.g., 'NIFTY')
 * @param broker The broker type (e.g., 'Zerodha')
 * @returns The exchange token or null if not found
 */
export function getExchangeToken(
  symbol: string,
  broker: string
): string | null {
  if (!(symbol in UNDERLYING_TOKEN_MAP)) {
    return null;
  }

  return UNDERLYING_TOKEN_MAP[symbol][broker as BrokerType] || null;
}

/**
 * Get all available symbols
 * @returns Array of available symbols
 */
export function getAvailableSymbols(): string[] {
  return Object.keys(UNDERLYING_TOKEN_MAP);
}

/**
 * Check if a symbol is supported
 * @param symbol The symbol to check
 * @returns boolean indicating if the symbol is supported
 */
export function isSymbolSupported(symbol: string): boolean {
  return symbol in UNDERLYING_TOKEN_MAP;
}
