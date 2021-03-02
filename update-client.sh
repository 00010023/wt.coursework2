#!/bin/sh
# shellcheck disable=SC2164
cd "$(dirname "$0")"
cp -aRf ./client/. ../webtech/
cd ../webtech
git add .
git commit -m "Canvas Update"
git push
