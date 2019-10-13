module.exports = {
  root: true,
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true
    }
  },
  rules: {
    semi: ["error", "never"],
    quotes: ["error", "single"],
    indent: ["error", 4, { "SwitchCase": 4 }],
  },
  // extends: '@react-native-community',
};
