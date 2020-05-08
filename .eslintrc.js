module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/no-extraneous-dependencies': ['error', {'devDependencies': true}],
    'import/no-unresolved': 'off',
    'import/extensions': ['error', 'ignorePackages', { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' }],
    'comma-dangle': ['error', 'never'],
    'max-len': ['error', { 'code': 120 }],
    'arrow-parens': [2, 'as-needed'],
    'no-extend-native': [2, { 'exceptions': ['Array'] }],
    'no-plusplus': 'off',
    'no-multi-assign': 'off',
    'object-curly-newline': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint',
  }
};
