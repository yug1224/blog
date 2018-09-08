module.exports = {
  root: true,
  parserOptions: {
    ecmaFeatures: {
      modules: true
    },
    ecmaVersion: 2018,
    sourceTypes: 'module',
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended', 'prettier'],
  // required to lint *.vue files
  plugins: ['html', 'prettier'],
  // add your custom rules here
  rules: {
    // 'space-before-function-paren': ['error', 'never'],
    'prettier/prettier': [
      'error',
      {
        printWidth: 200,
        singleQuote: true,
        semi: false
      }
    ]
  },
  globals: {}
}
