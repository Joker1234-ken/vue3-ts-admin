const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:vue/essential', 'standard'],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-console': isProd ? 'warn' : 'off',
    'no-debugger': isProd ? 'warn' : 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'vue/multi-word-component-names': 'off',
    'space-before-function-paren': 'off',
    'no-empty': 'off',
    camelcase: 'off'
  }
}
