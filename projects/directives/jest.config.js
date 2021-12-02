const { resolve } = require('path');

module.exports = {
  rootDir: resolve(__dirname),
  preset: 'jest-preset-angular',
  moduleFileExtensions: [
    'ts',
    'html',
    'js',
    'json',
    'mjs'
  ],
  testMatch: [
    '<rootDir>/src/**/+(*.)+(spec).+(ts)'
  ],
  transform: {
    '^.+\\.(ts|html|js|json|mjs)$': 'jest-preset-angular'
  },
  resolver: resolve(__dirname, '../../node_modules/jest-preset-angular/build/resolvers/ng-jest-resolver.js'),
  setupFilesAfterEnv: [resolve(__dirname, '../../setup-jest.ts')],
  transformIgnorePatterns: [
    'node_modules/(?!.*\\.mjs$)'
  ],
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageDirectory: resolve(__dirname, '../../dist/coverage/directives')
};
