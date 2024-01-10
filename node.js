module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['standard', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        tabWidth: 4,
        useTabs: true,
        semi: false,
        printWidth: 80,
        singleQuote: true,
        arrowParens: 'always',
        endOfLine: 'auto',
        bracketSpacing: true,
        jsxSingleQuote: true,
        bracketSameLine: true
      },
    ],
  },
  settings: {
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  },
}
