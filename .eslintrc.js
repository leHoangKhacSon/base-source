module.exports = {
  parse: '@typescript-eslint/parser', // special the ESlint parser
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2018, // allows for the parsing of modern ECMAScript features
    sourceType: 'module', // allows for the use of imports
    ecmaFeatures: {
      jsx: true // allows for the parsing of JSX
    }
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['warnings', 'single']
  },
  setting: {
    react: {
      version: 'detect'
    }
  }
  // "rules": {
  //   "semi": ["error", "always"],
  //   "quotes": ["warnings", "single"],
  //   "prettier/prettier": "error"
  // },
  // "parserOptions": {
  //   "ecmaVersion": 2017
  // },
  // "env": {
  //   "es6": true,
  //   "node": true,
  //   "browser": true
  // },
  // "plugins": ["prettier"],
};
