#!/bin/sh

THIS_DIR="$(pwd)"
REPO_ROOT="${GITHUB_WORKSPACE:=$THIS_DIR}"
cd $REPO_ROOT
echo "Repo root directory: $(pwd)"

# setup git
echo "-- setup git"
git config --global user.email "you@example.com"
git config --global user.name "Github Action"

# release vanilla lib
echo "-- release vanilla lib"
cd $REPO_ROOT/packages/embed
yarn release-vanilla

# bump vanilla lib
echo "-- bump vanilla lib"
cd $REPO_ROOT/packages/embed-react
yarn upgrade @synergetics/embed

# commit vanilla bump in react lib
echo "-- commit vanilla lib bump in react lib"
cd $REPO_ROOT
git add packages/embed-react
git commit -m 'feat: Bump @synergetics/embed in @synergetics/embed-react package [skip ci]'
git push https://$GITHUB_TOKEN@github.com/synergetics/embed.git

# release react lib, will also commit all changes in react lib including vanilla lib bump
echo "-- release react lib, will also commit all changes in react lib including vanilla lib bump"
cd $REPO_ROOT/packages/embed-react
yarn release

# bump vanilla and react libs in demos
echo "-- bump vanilla and react libs in demos"
cd $REPO_ROOT/packages/demo-nextjs
yarn upgrade @synergetics/embed
yarn upgrade @synergetics/embed-react

cd $REPO_ROOT/packages/demo-react
yarn upgrade @synergetics/embed-react

cd $REPO_ROOT/packages/demo-webpack
yarn upgrade @synergetics/embed

# commit vanilla and react lib bumps in demos
echo "-- commit vanilla and react lib bumps in demos"
cd $REPO_ROOT
git add packages/demo-*
git commit -m 'chore: Bump @synergetics/embed and @synergetics/embed-react in demo packages'
git push https://$GITHUB_TOKEN@github.com/synergetics/embed.git
