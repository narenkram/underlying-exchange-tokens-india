module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/src/__tests__/**/*.test.ts"],
  collectCoverageFrom: ["src/**/*.ts", "!src/__tests__/**/*.ts"],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov"],
};
