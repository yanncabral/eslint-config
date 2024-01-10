module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:@next/next/recommended",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "@typescript-eslint",
    "prettier"
  ],
  "rules": {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": [
      "error", {
        "trailingComma": 'all',
        "tabWidth": 4,
        "useTabs": true,
        "semi": false,
        "printWidth": 80,
        "singleQuote": true,
        "arrowParens": 'always',
        "endOfLine": 'auto',
        "bracketSpacing": true,
        "jsxSingleQuote": true,
        "bracketSameLine": true
      },
    ],
    "react/no-unknown-property": "error"
  }
}