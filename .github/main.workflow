workflow "Test PR" {
  on = "pull_request"
  resolves = ["Lint", "Test", "Build Lib"]
}

action "Filter PR Commits" {
  uses = "actions/bin/filter@3c0b4f0e63ea54ea5df2914b4fabf383368cd0da"
  args = "action 'opened|synchronize'"
}

action "Install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "ci"
  needs = ["Filter PR Commits"]
}

action "Test" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "test"
  needs = ["Install"]
}

action "Lint" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "run lint"
  needs = ["Install"]
}

action "Build Lib" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "run build"
  needs = ["Install"]
}

workflow "Deploy Docs Site" {
  on = "push"
  resolves = ["Deploy"]
}

action "Filter Master Branch" {
  uses = "actions/bin/filter@3c0b4f0e63ea54ea5df2914b4fabf383368cd0da"
  args = "branch master"
}

action "Install (Docs)" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "ci"
  needs = ["Filter Master Branch"]
}

action "Build" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "run docs"
  needs = ["Install (Docs)"]
}

action "Deploy" {
  uses = "peaceiris/actions-gh-pages@v1.0.1"
  env = {
    PUBLISH_DIR = "./docs"
    PUBLISH_BRANCH = "gh-pages"
  }
  needs = ["Build"]
  secrets = ["ACTIONS_DEPLOY_KEY"]
}
