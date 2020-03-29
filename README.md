# Typescript / Express template

```bash
yarn init
yarn add -D typescript @types/node
#tsconfig
yarn tsc --init
```

``tsconfig.json``で任意を有効化
```js
"compilerOptions": {
  "target": "es6",
  "sourceMap": true,
  "outDir": "./dir",
  "resolveJsonModule": true # added
  "strictNullChecks": false,
},
"include": ["src/**/*"]
```

```bash
yarn add -D ts-node ts-node-dev
yarn add -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

``package.json``に追加
```json
"scripts": {
  "dev": "ts-node-dev --respawn src/index.ts",
  "tsc": "tsc",
  "clear": "rm -rf dist",
  "lint": "eslint --fix src/*",
  "start": "node dist/"
},
```

# express

```bash
yarn add express
yarn add -D @types/express
yarn eslint --init
```
```json
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "plugins": ["@typescript-eslint"],
  "env": {
    "node": true,
    "es6": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "rules": {
    "no-console": "off",
    "quotes": ["error", "single"],
    "semi": ["error", "never"],
    "comma-dangle": ["error", "only-multiline"]
  }
}
```
