module.exports = {
  root: true,
  env: {
    es2020: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: '2020',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    // '@typescript-eslint/no-unused-vars': 1,
    // 'node/file-extension-in-import': 'never',
    // 'import/extensions': ['error', 'ignorePackages', {
    //   js: 'never',
    //   ts: 'never',
    //   mjs: 'never',
    //   jsx: 'never',
    // }],
  },
};
