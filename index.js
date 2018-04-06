"use strict";

module.exports = {
  extends: ["standard", "prettier", "prettier/standard"],
  plugins: ["prettier", "standard", "mocha"],
  rules: {
    "mocha/no-exclusive-tests": "error",
    "space-before-function-paren": "off",
    "prettier/prettier": "error",

    "promise/catch-or-return": "error",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error"
  },
  parserOptions: {
    ecmaVersion: 9
  },
  env: {
    es6: true,
    node: true,
    mocha: true
  }
};
