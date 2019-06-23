FROM node:10

LABEL version="1.0.0"
LABEL repository="https://github.com/emortlock/spartan-ui/tree/master/.github/actions/standard-version"
LABEL homepage="https://github.com/emortlock/spartan-ui/tree/master/.github/actions/standard-version"
LABEL maintainer="Edward Mortlock <edward@mortlock.dev>"

LABEL com.github.actions.name="Standard Version Release GitHub Action"
LABEL com.github.actions.description="Runs release script and pushes changes & tag."
LABEL com.github.actions.icon="tag"
LABEL com.github.actions.color="gray-dark"

COPY "entrypoint.sh" "/entrypoint.sh"
ENTRYPOINT ["/entrypoint.sh"]
