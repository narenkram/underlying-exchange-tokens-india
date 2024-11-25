# Underlying Exchange Tokens India

A comprehensive mapping of exchange tokens for underlying instruments across different Indian brokers.

## Purpose

This npm package was created out of necessity when developing a trading platform that supports multiple brokers. In such platforms, an exchange token is required for LTP (Last Traded Price) via WebSocket subscription. While exchange tokens should ideally be common for all trading symbols, they are only consistent for call, put, futures, and equity trading symbols.

However, when selecting underlying instruments like NIFTY or BANKNIFTY (master symbols), these symbols have their own exchange tokens that vary across different broker types. The reason for this inconsistency is unclear. Therefore, this package was developed to return the underlying symbol token based on the broker type.

## Installation

```bash
npm install underlying-exchange-tokens-india
```

## Usage

```typescript
import {
  getExchangeToken,
  isSymbolSupported,
  getAvailableSymbols,
} from "underlying-exchange-tokens-india";
// Get token for NIFTY on Zerodha
const niftyToken = getExchangeToken("NIFTY", "Zerodha");
console.log(niftyToken); // '1001'
// Check if symbol is supported
console.log(isSymbolSupported("NIFTY")); // true
// Get all available symbols
console.log(getAvailableSymbols()); // ['NIFTY', 'BANKNIFTY', 'FINNIFTY', ...]
```

## Supported Brokers

- Zerodha
- Flattrade
- Shoonya

## Supported Symbols

- NIFTY
- BANKNIFTY
- FINNIFTY
- MIDCPNIFTY
- SENSEX
- BANKEX

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
