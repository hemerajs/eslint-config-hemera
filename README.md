# eslint-config-hemera

Compatible eslint configuration to use [Prettier](https://prettier.io/) with 99% of [StandardJs](https://standardjs.com/)

## Installation

```
npm install --save-dev eslint eslint-config-hemera
```

## Usage

.eslintrc.json
```js
{
  "extends": "hemera"
}

```

## Scripts

```json
{
  "lint": "eslint \"./**/*.js\"",
  "lint:fix": "eslint --fix \"./**/*.js\"",
  "format": "prettier \"./**/*.js\"",
  "format:fix": "prettier \"./**/*.js\" --write",
}
```

## Limitation

Prettier has no option for `"space-before-function-paren"` [Issue 1139](https://github.com/prettier/prettier/issues/1139). That's the reason why we turn it off to have better IDE support.

### Great tooling

- [vscode](https://code.visualstudio.com/)
- Use [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) to find lint issues.
- Use [prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) to automatically format your code.
