import {
  getExchangeToken,
  isSymbolSupported,
  getAvailableSymbols,
} from "../index";

describe("Exchange Token Utilities", () => {
  describe("getExchangeToken", () => {
    it("should return correct token for NIFTY on Zerodha", () => {
      expect(getExchangeToken("NIFTY", "Zerodha")).toBe("1001");
    });

    it("should return correct token for BANKNIFTY on Flattrade", () => {
      expect(getExchangeToken("BANKNIFTY", "Flattrade")).toBe("26009");
    });

    it("should return null for invalid symbol", () => {
      expect(getExchangeToken("INVALID", "Zerodha")).toBeNull();
    });

    it("should return null for invalid broker", () => {
      expect(getExchangeToken("NIFTY", "InvalidBroker")).toBeNull();
    });
  });

  describe("isSymbolSupported", () => {
    it("should return true for supported symbols", () => {
      expect(isSymbolSupported("NIFTY")).toBe(true);
      expect(isSymbolSupported("BANKNIFTY")).toBe(true);
    });

    it("should return false for unsupported symbols", () => {
      expect(isSymbolSupported("INVALID")).toBe(false);
    });
  });

  describe("getAvailableSymbols", () => {
    it("should return array of supported symbols", () => {
      const symbols = getAvailableSymbols();
      expect(symbols).toContain("NIFTY");
      expect(symbols).toContain("BANKNIFTY");
      expect(symbols).toContain("FINNIFTY");
    });
  });
});
