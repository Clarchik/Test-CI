/* eslint-disable functional/immutable-data */
import { release } from '@clarchikjs/release-scripts';
import colors from 'picocolors';
import { logRecentCommits, run } from './releaseUtils';

release({
  owner: 'Clarchik',
  repo: 'Test-CI',
  packages: ['Test-CI'],
  toTag: (_, version) => `v${version}`,
  logChangelog: () => logRecentCommits(),
  getPkgDir: () => '.',
  generateChangelog: async () => {
    console.log(colors.cyan('\nGenerating changelog...'));
    const changelogArgs = [
      'conventional-changelog',
      '-p',
      'angular',
      '-i',
      'CHANGELOG.md',
      '-s'
      // '--commit-path',
      // '.'
    ];
    await run('npx', changelogArgs, { cwd: '.' });
  }
});
