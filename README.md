# ESLint config

These are the ESLint rules I use in different projects. If you also want to use them, you're most welcome. You can install the packages like this:

```sh
npm install eslint @noeldemartin/eslint-config-typescript --save-dev
```

And use them in your eslint config file:

```js
// .eslintrc.js
module.exports = {
    extends: ['@noeldemartin/eslint-config-typescript'],
};
```
