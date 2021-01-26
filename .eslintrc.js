module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ['svelte3'],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
    {
      extends: ['plugin:cypress/recommended'],
      files: ['cypress/**/*'],
      env: {
        'cypress/globals': true,
      },
      plugins: ['cypress'],
    },
  ],
  rules: {},
}
