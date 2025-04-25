// eslint.config.js
export default {
  files: ["src/**/*.js"],
  languageOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ["eslint:recommended"],
  rules: {}
};
