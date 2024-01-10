// /* eslint-env node */
// require('@rushstack/eslint-patch/modern-module-resolution');
//
// module.exports = {
//   'root': true,
//   'env': {
//     'es2021': true,
//     'node': true,
//     'browser': false,
//   },
//   extends: [
//     'eslint:recommended',
//     /** @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#recommended-configs */
//     // 'plugin:@typescript-eslint/recommended',
//     'prettier',
//     'plugin:prettier/recommended',
//     'plugin:vue/vue3-recommended',
//     '@electron-toolkit',
//     '@electron-toolkit/eslint-config-ts/eslint-recommended',
//     '@vue/eslint-config-typescript/recommended',
//     '@vue/eslint-config-prettier',
//   ],
//   rules: {
//     'vue/require-default-prop': 'off',
//     'vue/multi-word-component-names': 'off',
//   },
//   // 'parser': '@typescript-eslint/parser',
//   'parserOptions': {
//     'ecmaVersion': 12,
//     'sourceType': 'module',
//   },
//   // 'plugins': ['@typescript-eslint'],
//   'ignorePatterns': ['node_modules/**', '**/dist/**'],
//   'rules': {
//     // '@typescript-eslint/no-unused-vars': [
//     //   'error',
//     //   {
//     //     'argsIgnorePattern': '^_',
//     //     'varsIgnorePattern': '^_',
//     //   },
//     // ],
//     // '@typescript-eslint/no-var-requires': 'off',
//     // '@typescript-eslint/consistent-type-imports': 'error',
//     /**
//      * Having a semicolon helps the optimizer interpret your code correctly.
//      * This avoids rare errors in optimized code.
//      * @see https://twitter.com/alex_kozack/status/1364210394328408066
//      */
//     'semi': ['error', 'always'],
//     /**
//      * This will make the history of changes in the hit a little cleaner
//      */
//     'comma-dangle': ['warn', 'always-multiline'],
//     /**
//      * Just for beauty
//      */
//     'quotes': [
//       'warn',
//       'single',
//       {
//         'avoidEscape': true,
//       },
//     ],
//     // '@typescript-eslint/no-explicit-any': 'off',
//     // '@typescript-eslint/ban-types': 'off',
//   },
// };

require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@electron-toolkit',
    '@electron-toolkit/eslint-config-ts/eslint-recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier'
  ],
  rules: {
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off'
  }
}
