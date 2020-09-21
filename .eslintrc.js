module.exports = {
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'linebreak-style': ['error', 'unix'],
    'comma-dangle': ['error', 'always-multiline'],
    'semi': ['error', 'always'],
    'quote-props': ['error', 'consistent'],
    'quotes': ['error', 'single'],
    'no-unused-vars': 'off',
    'object-curly-spacing': ['error', 'always'],
    'no-console': 'off',
    'eqeqeq': ['error', 'always'],
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    webextensions: true,
  },
};
