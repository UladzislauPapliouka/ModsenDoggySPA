import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier/recommended';
import tsConfig from 'typescript-eslint';
import reactEslintPlugin from 'eslint-plugin-react';
export default [
  js.configs.recommended,
  ...tsConfig.configs.recommended,
  reactEslintPlugin.configs.flat.recommended,
  prettier,
  { ignores: ['node_modules/*', '.next/*'] },
];
