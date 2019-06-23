#!/bin/sh

set -e

echo "INFO: trigger event ${GITHUB_EVENT_NAME}"

# Deploy Key Setup

echo "INFO: setting up deploy key"

if [ -z "${ACTIONS_DEPLOY_KEY}" ]; then
    echo "error: not found ACTIONS_DEPLOY_KEY"
    exit 1
fi

mkdir /root/.ssh
ssh-keyscan -t rsa github.com > /root/.ssh/known_hosts
echo "${ACTIONS_DEPLOY_KEY}" > /root/.ssh/id_rsa
chmod 400 /root/.ssh/id_rsa

# npm Setup

echo "INFO: setting up npm"

if [ -z "${NPM_AUTH_TOKEN}" ]; then
    echo "error: not found NPM_AUTH_TOKEN"
    exit 1
fi

NPM_CONFIG_USERCONFIG="${NPM_CONFIG_USERCONFIG-"$HOME/.npmrc"}"
NPM_REGISTRY_URL="${NPM_REGISTRY_URL-registry.npmjs.org}"
NPM_STRICT_SSL="${NPM_STRICT_SSL-true}"
NPM_REGISTRY_SCHEME="https"
if ! $NPM_STRICT_SSL
then
    NPM_REGISTRY_SCHEME="http"
fi

printf "//%s/:_authToken=%s\\nregistry=%s\\nstrict-ssl=%s" "$NPM_REGISTRY_URL" "$NPM_AUTH_TOKEN" "${NPM_REGISTRY_SCHEME}://$NPM_REGISTRY_URL" "${NPM_STRICT_SSL}" > "$NPM_CONFIG_USERCONFIG"
chmod 0600 "$NPM_CONFIG_USERCONFIG"


# Git Setup
echo "INFO: setting up git"

git init
git config user.name "${GITHUB_ACTOR}"
git config user.email "${GITHUB_ACTOR}@users.noreply.github.com"

if ! git config remote.origin.url > /dev/null; then
    git remote add origin "git@github.com:${GITHUB_REPOSITORY}.git"
fi

git checkout master

echo "INFO: running release script"
npm run release

echo "INFO: pushing new version"
git push --no-verify --follow-tags origin master

echo "INFO: publishing to npm"
npm publish
