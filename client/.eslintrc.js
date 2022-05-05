module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "taro/react",
    // prettier放到最后，会覆盖之前的，避免prettier和eslint冲突
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": 2,
    "@typescript-eslint/no-shadow": 2,
    "react/self-closing-comp": 2,
    "import/no-commonjs": "off",
  },
  settings: {
    react: {
      // 指定react版本
      version: "detect",
    },
  },
};
