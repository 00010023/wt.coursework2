#!/bin/sh
cd "$(dirname "$0")" || exit
cd ../
cp -aRf ./client/. ../webtech/
cd ../webtech || exit
git add .
git commit -m "Updating..."
git push
exit 0
