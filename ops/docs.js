const ghpages = require('@emortlock/gh-pages')
const path = require('path')
const { version } = require('../package.json')
const { ACTIONS_DEPLOY_KEY, GITHUB_ACTOR, GITHUB_REPOSITORY } = process.env

ghpages.publish(
  'docs',
  {
    branch: 'gh-pages',
    repo: `https://${ACTIONS_DEPLOY_KEY}:x-oauth-basic@github.com/${GITHUB_REPOSITORY}.git`,
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
  },
)
