workflow "Test PR" {
  on = "pull_request"
  resolves = ["Test"]
}

action "Filter PR Commits" {
  uses = "actions/bin/filter@3c0b4f0e63ea54ea5df2914b4fabf383368cd0da"
  args = "action 'opened|synchronize'"
}

action "Install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Filter PR Commits"]
  args = "install"
}

action "Test" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "test"
  needs = ["Install"]
}
