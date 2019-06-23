workflow "PR" {
  on = "pull_request"
  resolves = ["PR: Lint", "PR: Test", "PR: Build Lib", "PR: Build Docs"]
}

action "PR: Is Commit" {
  uses = "actions/bin/filter@3c0b4f0e63ea54ea5df2914b4fabf383368cd0da"
  args = "action 'opened|synchronize'"
}

action "PR: Install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "ci"
  needs = ["PR: Is Commit"]
}

action "PR: Test" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "test"
  needs = ["PR: Install"]
}

action "PR: Lint" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "run lint"
  needs = ["PR: Install"]
}

action "PR: Build Lib" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "run build"
  needs = ["PR: Install"]
}

action "PR: Build Docs" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "run docs"
  needs = ["PR: Install"]
}

workflow "Release" {
  on = "push"
  resolves = ["Release: Deploy to GH Pages"]
}

action "Release: Is Master" {
  uses = "actions/bin/filter@3c0b4f0e63ea54ea5df2914b4fabf383368cd0da"
  args = "branch master"
}

action "Release: Install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "ci"
  needs = ["Release: Is Master"]
}

action "Release: Test" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "test"
  needs = ["Release: Install"]
}

action "Release: Lint" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "run lint"
  needs = ["Release: Install"]
}

action "Release: Build Lib" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "run build"
  needs = ["Release: Install"]
}

action "Release: Version and Publish" {
  uses = "./.github/actions/release"
  needs = ["Release: Build Lib"]
  needs = ["Release: Lint", "Release: Test", "Release: Build Lib"]
  secrets = ["ACTIONS_DEPLOY_KEY", "GITHUB_TOKEN", "NPM_AUTH_TOKEN"]
}

action "Release: Build Docs" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "run docs"
  needs = ["Release: Version and Publish"]
}

action "Release: Deploy to GH Pages" {
  uses = "peaceiris/actions-gh-pages@v1.0.1"
  env = {
    PUBLISH_DIR = "./docs"
    PUBLISH_BRANCH = "gh-pages"
  }
  needs = ["Release: Build Docs"]
  secrets = ["ACTIONS_DEPLOY_KEY"]
}
