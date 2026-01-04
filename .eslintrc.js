module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-mixed-spaces-and-tabs': 0, //禁止混用tab和空格
    'no-unused-vars': 0, //不能有声明后未被使用的变量或参数
    'vue/no-unused-vars': 0, //不能有声明后未被使用的变量或参数
    'no-case-declarations': 0, //禁止在case 中使用let const等
    'no-undef': 0,
    'no-useless-escape': 0,
    'no-empty': 0,
    'no-inner-declarations': 0,
    'vue/no-unused-components': 0,
    'vue/valid-template-root': 0,
    'no-func-assign': 'error',
    'no-fallthrough': 'error',
    'no-cond-assign': ['error'],
  },
  parserOptions: {
    parser: '@babel/eslint-parser', // 使用 @babel/eslint-parser 解析器
  },
};
