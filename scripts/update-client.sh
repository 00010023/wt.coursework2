#!/bin/sh
cd "$(dirname "$0")" || exit

thereisnoclient() {
  git clone https://github.com/genemators/webtech temporary
  mv ./temporary/.git ./
  rm -rf ./temporary
}

uploadclient() {
  git add .
  git commit -m "Updating..."
  git push
}

bootstrapclient() {
  CURRENTPATHY=$(pwd)
  cd ../
  mkdir webtech
  cd "$CURRENTPATHY" || exit
}

cd ../
[ ! -d "../webtech" ] && bootstrapclient
[ -d "../webtech" ] && cd ../webtech || exit
cd ../webtech || exit
find . -type f -not -name '.git'-delete
cd ../wt.coursework2 || exit
cp -aRf ./client/. ../webtech/
cd ../webtech || exit
[ ! -d ".git" ] && thereisnoclient
[ -d ".git" ] && uploadclient
exit 0
