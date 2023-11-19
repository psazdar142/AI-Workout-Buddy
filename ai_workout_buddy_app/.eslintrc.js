// .eslintrc.js
// module.exports = {
//     parser: '@typescript-eslint/parser',
//     extends: [
//       'plugin:@typescript-eslint/recommended',
//       'plugin:prettier/recommended',
//       'prettier/@typescript-eslint',
//     ],
//     plugins: ['@typescript-eslint'],
//     rules: {
//       // Add specific rules if needed
//     },
//   };


  module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      'prettier/@typescript-eslint',
    ],
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
      // Add specific rules if needed
    },
  };