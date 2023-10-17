module.exports = {
  extends: [
    '@mate-academy/eslint-config-react-typescript',
    'plugin:react/recommended',
  ],
  rules: {
    // React
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
    'react/self-closing-comp': 0,
    'react/display-name': 0,

    // JavaScript
    semi: 0,
    'no-proto': 0,
    'no-unused-vars': 0,

    // TypeScript
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/semi': ['error'],
    'jsx-a11y/label-has-associated-control': ['error', {
      assert: 'either',
    }],
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
};
