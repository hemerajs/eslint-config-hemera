# eslint-config-hemera

Hemera eslint config. The perfect match to work with Prettier, Mocha and Node.

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

### Great tooling

- [vscode](https://code.visualstudio.com/)
- Use [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) to find lint issues.
- Use [prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) to automatically format your code.
