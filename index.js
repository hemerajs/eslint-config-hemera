"use strict"

module.exports = {
  extends: ["standard", "prettier", "prettier/standard"],
  plugins: ["prettier", "standard", "mocha"],
  rules: {
    "mocha/no-exclusive-tests": "error",
    "space-before-function-paren": "off",
    "prettier/prettier": "error"
  },
  env: {
    es6: true,
    node: true,
    mocha: true
  }
}
