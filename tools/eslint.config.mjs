import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/typescript'],
  {
    files: ['**/*.ts'],
    rules: {
      'functional/immutable-data': ['off'],
      'functional/no-loop-statements': ['off'],
      '@typescript-eslint/no-explicit-any': ['off'],
      'no-extra-boolean-cast': ['off'],
    },
  },
];
