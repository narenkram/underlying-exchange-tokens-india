# Underlying Exchange Tokens India

A comprehensive mapping of exchange tokens for underlying instruments across different Indian brokers.

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
- (and more...)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
