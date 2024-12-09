const globals = require('globals');
const js = require('@eslint/js');
const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = [
  ...compat.extends('eslint:recommended'),
  {
    ignores: ['public/'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.webextensions,
      },
      ecmaVersion: 2019,
      sourceType: 'module',
    },
    rules: {
      'indent': ['error', 2, {
        SwitchCase: 1,
      }],
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
  },
];
