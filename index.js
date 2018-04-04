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
    "promise/param-names": "error",

    "node/no-unsupported-features": "error",
    "node/no-missing-require": "off",
    "node/no-unpublished-bin": "off",
    "node/shebang": "error",
    "node/no-unpublished-require": "off",
    "node/no-deprecated-api": "error"
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
