module.exports = {
  testEnvironment: 'node',

  bail: true,
  verbose: true,

  setupFilesAfterEnv: ['jest-extended'],
  collectCoverageFrom: [
    'app/**/*.{js}',
    '!**/node_modules/**',
  ],

  testPathIgnorePatterns: [/node_modules/],
  testMatch: ['<rootDir>/test/**/?(*.)+(spec|test).js'],
};
