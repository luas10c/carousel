module.exports = {
  root: true,
  env: {
    es2020: true,
    browser: true
  },
  extends: ['prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'error'
  }
}
