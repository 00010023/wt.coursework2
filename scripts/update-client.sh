#!/bin/sh
cd "$(dirname "$0")" || exit
cd ../
cd ../webtech || exit
find . -type f -not -name '.git'-delete
cd ../wt.coursework2 || exit
cp -aRf ./client/. ../webtech/
cd ../webtech || exit
git add .
git commit -m "Updating..."
git push
exit 0
