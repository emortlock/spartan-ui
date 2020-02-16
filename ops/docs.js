const ghpages = require('@emortlock/gh-pages')
const path = require('path')
const { version } = require('../package.json')
const { GITHUB_TOKEN, GITHUB_REPOSITORY, GITHUB_ACTOR } = process.env

console.log('Publishing to GH Pages')
ghpages.publish(
  'docs',
  {
    branch: 'gh-pages',
    repo: `https://x-access-token:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git`,
    message: `docs: v${version} release`,
    user: {
      name: GITHUB_ACTOR,
      email: `${GITHUB_ACTOR}@users.noreply.github.com`,
    },
    silent: true,
    getCacheDir: () => path.join(process.cwd(), '.cache', 'gh-pages'),
  },
  err => {
    if (err) {
      console.error(err)
    }
    console.log('Complete')
  },
)
