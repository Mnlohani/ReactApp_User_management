module.exports = {
  branches: ['main'],
  repositoryUrl: 'https://github.com/sonny-automatics/vite-project',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/github',
      {
        assets: [{ path: 'dist.zip', label: 'Dist' }],
      },
    ],
  ],
}
