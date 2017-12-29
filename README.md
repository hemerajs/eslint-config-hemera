# eslint-config-hemera

Compatible eslint configuration to use Prettier with 99% of StandardJs

## Usage

.eslintrc.json
```json
{
  "extends": "hemera"
}

```

## Limitation

Prettier has no option for `"space-before-function-paren"`. That's the reason why we turn it off to have better IDE support.
