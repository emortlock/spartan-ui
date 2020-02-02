const ghpages = require('gh-pages')

const { version } = require('../package.json')
const { ACTIONS_DEPLOY_KEY, GITHUB_REPOSITORY } = process.env

ghpages.publish('dist', {
  branch: 'gh-pages',
  repo: `https://${ACTIONS_DEPLOY_KEY}:x-oauth-basic@github.com/${GITHUB_REPOSITORY}.git`,
  silent: true,
  message: `docs: v${version} release`,
})
