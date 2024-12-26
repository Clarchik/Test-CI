import nx from '@nx/eslint-plugin';
import tseslint from 'typescript-eslint';
import { plugins } from './eslint-rules/plugins.config.mjs';
import {
  angularESLintTemplate,
  angularESLint,
  vitestESLint,
  storyBookESLint,
  nxLintBoundaries
} from './eslint-rules/index.mjs';

export default tseslint.config(
  nx.configs['flat/base'],
  nx.configs['flat/typescript'],
  nx.configs['flat/javascript'],
  nx.configs['flat/angular'],
  plugins,
  angularESLint,
  angularESLintTemplate,
  vitestESLint,
  storyBookESLint,
  nxLintBoundaries,
  {
    ignores: ['**/dist', 'node_modules/', '**/.nx', '**/.angular']
  }
);
