import js from '@eslint/js';

export default [
  {
    ignores: [
      'node_modules/',
      'dist/',
      '.env'
    ]
  },
  {
    ...js.configs.recommended,
    languageOptions: {
      ...js.configs.recommended.languageOptions,
      globals: {
        ...js.configs.recommended.languageOptions?.globals,
        process: 'readonly'
      }
    }
  }
];
