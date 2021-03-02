#!/bin/sh
cd "$(dirname "$0")" || exit
cd ../
git add .
git commit -m "Automized updates by GenoGit"
git push
exit 1
