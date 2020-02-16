const ghpages = require('gh-pages')

const { version } = require('../package.json')
const { ACTIONS_DEPLOY_KEY, GITHUB_ACTOR, GITHUB_REPOSITORY } = process.env

ghpages.publish('dist', {
  branch: 'gh-pages',
  repo: `https://${ACTIONS_DEPLOY_KEY}:x-oauth-basic@github.com/${GITHUB_REPOSITORY}.git`,
  message: `docs: v${version} release`,
  user: {
    name: GITHUB_ACTOR,
    email: `${GITHUB_ACTOR}@users.noreply.github.com`,
  },
  silent: true,
})
