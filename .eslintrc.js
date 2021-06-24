module.exports = {
  env: {
    browser: true,
  },
  extends: ['eslint:recommended', 'airbnb', 'airbnb/hooks', 'prettier'],
  plugins: ['prettier'],
  globals: {},
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': ['error', { ignore: ['^@.*$', '^windi.css$'] }],
    'no-console': 'off',
    'no-nested-ternary': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
      },
    ],
    'no-unsafe-optional-chaining': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-uses-vars': 'error',
    'react/jsx-uses-react': 'error',
  },
};