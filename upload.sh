#!/bin/sh
cd "$(dirname "$0")" || exit
cd ..
zip -r 00010023WT ./wt.coursework2 -x \
  ./wt.coursework2/.git/\* \
  ./wt.coursework2/.idea/\* \
  ./wt.coursework2/.github/\* \
  ./wt.coursework2/node_modules/\* \
  ./wt.coursework2/docs/node_modules/\* \
  ./wt.coursework2/server/node_modules/\* \
  ./wt.coursework2/server/.env \
  ./wt.coursework2/client/node_modules/\* \
  ./wt.coursework2/client/.next/\* \
  ./wt.coursework2/.next/\* \
  ./wt.coursework2/.DS_Store
cd ./wt.coursework2 || exit
[ ! -d "./upload" ] && mkdir upload
BACKUP=$(date +'%m-%d-%Y')
mv ../00010023WT.zip ./upload/00010023-"$BACKUP".zip
exit 0
