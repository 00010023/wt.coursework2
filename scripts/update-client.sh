#!/bin/sh
cd "$(dirname "$0")" || exit
cd ../
cp -aRf ./client/. ../webtech/
cd ../webtech
git add .
git commit -m "Canvas Update"
git push
exit 1
