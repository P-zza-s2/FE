module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    strings: 'off',
    quotes: ['error', 'single'],
    'no-unused-vars': 'error',
    'no-trailing-spaces': 'warn',
    'no-undef': 'error',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'error'
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
};
