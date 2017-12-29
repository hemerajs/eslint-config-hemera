# eslint-config-hemera

Compatible eslint configuration to use Prettier with 99% of StandardJs

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

## Limitation

Prettier has no option for `"space-before-function-paren"`. That's the reason why we turn it off to have better IDE support.

### Great tooling

- [vscode](https://code.visualstudio.com/)
- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) (enable format-on-save)
