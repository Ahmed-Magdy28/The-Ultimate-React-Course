// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
   js.configs.recommended,
   {
      files: ['**/*.{js,jsx}'],
      languageOptions: {
         ecmaVersion: 'latest',
         sourceType: 'module',
         globals: globals.browser,
         parserOptions: {
            ecmaFeatures: { jsx: true },
         },
      },
      plugins: {
         react,
         'react-hooks': reactHooks,
         'jsx-a11y': jsxA11y,
         import: importPlugin,
         'react-refresh': reactRefresh,
      },
      rules: {
         // 🧩 Spread plugin recommended rules first
         ...react.configs.recommended.rules,
         ...reactHooks.configs.recommended.rules,

         // 🧠 Then override what you don't want
         'react/react-in-jsx-scope': 'off',
         'react/jsx-uses-react': 'off',
         'react/prop-types': 'off',

         // 💡 Custom project rules
         'react-refresh/only-export-components': 'warn',
         'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      },
      settings: {
         react: {
            version: 'detect',
         },
      },
   },
];
