module.exports = {
  scripts: {
    prerelease: 'yarn build',
    precommit: 'git add .size-snapshot.json',
  },
}
