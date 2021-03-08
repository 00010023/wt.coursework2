#!/bin/sh
cd "$(dirname "$0")" || exit

there-is-no-client() {
  git clone https://github.com/genemators/webtech temporary
  mv ./temporary/.git ./
  rm -rf ./temporary
}

upload-client() {
  git add .
  git commit -m "Updating..."
  git push
}

cd ../
cd ../webtech || exit
find . -type f -not -name '.git'-delete
cd ../wt.coursework2 || exit
cp -aRf ./client/. ../webtech/
cd ../webtech || exit
[ ! -d ".git" ] && there-is-no-client
[ -d ".git" ] && update-client
exit 0
