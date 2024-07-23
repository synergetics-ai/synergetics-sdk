module.exports = {
  extends: ['@synergetics/eslint-config', 'prettier', 'plugin:prettier/recommended'],
  rules: {
    'no-restricted-imports': ['error', { patterns: ['./../*'] }], // do not use unnecessary leading `./`
  },
}
