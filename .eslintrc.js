module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true, 
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      '@react-native-community',
    ],
    overrides: [
      {
        files: ['.eslintrc.{js,cjs}'],
        parserOptions: {
          sourceType: 'script',
        },
      },
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    },
  };
  