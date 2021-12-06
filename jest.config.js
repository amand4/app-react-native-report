module.exports = {
  preset: "jest-expo",
  testPathIgnorePatterns: [
    "/node_modules"
  ],
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect"
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.tsx",
    "!src/**/*.test.tsx"
  ],
  transform: {
    "\\.[jt]sx?$": "babel-jest"
  },
  coverageReporters: [
    "lcov"
  ],
  //    "node_modules/(?!(jest-)?react-native|@react-native-community|@react-native-picker)",
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|@react-native-picker|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)"
  ],
}
