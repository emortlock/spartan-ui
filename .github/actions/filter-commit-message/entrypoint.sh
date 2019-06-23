#!/bin/sh

set -e

pattern=$1
message=$(git log --oneline --format=%B -1 $GITHUB_SHA)

if echo "$message" | grep -Pq "$pattern"; then
  echo "INFO: $message matches $pattern"
  # 78 is the "neutral" exit status
  exit 78
else
  echo "INFO: $message does not match $pattern"
  exit 0
fi
