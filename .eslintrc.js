module.exports = {
  root: true
, parser: '@typescript-eslint/parser'
, plugins: [
    '@typescript-eslint'
  ]
, extends: [
    'eslint:recommended'
  , 'plugin:@typescript-eslint/recommended'
  ]
, rules: {
    'no-constant-condition': 'off'
  , '@typescript-eslint/no-extra-semi': 'off'
  , '@typescript-eslint/no-inferrable-types': 'off'
  }
}
