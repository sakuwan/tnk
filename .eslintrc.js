module.exports = {
  root: true,

  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },

  env: {
    node: true,
    jest: true,
    browser: true,

    es2020: true,
  },

  extends: ['airbnb-base'],
  plugins: ['import'],

  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
