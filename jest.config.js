const path = require('path');

module.exports = {
  "preset": "jest-preset-angular",
  "moduleFileExtensions": [
    "ts",
    "html",
    "js",
    "json",
    "mjs"
  ],
  "moduleNameMapper": {
    "@core/(.*)": "<rootDir>/src/app/core/$1"
  },
  "rootDir": path.resolve(__dirname),
  "testMatch": [
    "<rootDir>/projects/**/src/**/+(*.)+(spec).+(ts)"
  ],
  "globals": {
    "ts-jest": {
      "allowSyntheticDefaultImports": true
    }
  },
  "transform": {
    "^.+\\.(ts|js|mjs|html)$": "jest-preset-angular"
  },
  "resolver": "jest-preset-angular/build/resolvers/ng-jest-resolver.js",
  "setupFilesAfterEnv": ["<rootDir>/setup-jest.ts"],
  "transformIgnorePatterns": [
    "<rootDir>/node_modules/(?!${esModules})",
    "<rootDir>/node_modules/(?!.*\\.mjs$)"
  ],
  "testEnvironment": "jsdom",
  "collectCoverage": true,
  "coverageDirectory": "<rootDir>/dist/coverage-browser"
}
