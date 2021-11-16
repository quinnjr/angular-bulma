const path = require('path');

require('jest-preset-angular/ngcc-jest-processor');

module.exports = {
  'preset': 'jest-preset-angular',
  'moduleFileExtensions': [
    'ts',
    'html',
    'js',
    'json',
    'mjs'
  ],
  'moduleNameMapper': {
    '@core/(.*)': '<rootDir>/projects/**/src/app/core/$1'
  },
  'rootDir': '.',
  'testMatch': [
    '<rootDir>/projects/**/(src|lib)/**/+(*.)+(spec).+(ts)'
  ],
  'globals': {
    'ts-jest': {
      'allowSyntheticDefaultImports': true,
      'stringifyContentPathRegex': '\\.html$'
    }
  },
  'transform': {
    '^.+\\.(ts|html|js|json|mjs)$': 'jest-preset-angular'
  },
  'resolver': 'jest-preset-angular/build/resolvers/ng-jest-resolver.js',
  'setupFilesAfterEnv': ['<rootDir>/setup-jest.ts'],
  'transformIgnorePatterns': [
    'node_modules/(?!.*\\.mjs$)'
  ],
  'testEnvironment': 'jsdom',
  'collectCoverage': true,
  'coverageDirectory': '<rootDir>/dist/coverage-browser'
}
