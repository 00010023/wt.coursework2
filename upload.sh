#!/bin/sh
cd "$(dirname "$0")" || exit
cd ..
zip -r 00010023WT ./wt.coursework2
cd ./wt.coursework2 || exit
[ ! -d "./upload" ] && mkdir upload
BACKUP=$(date +'%m-%d-%Y')
mv ../00010023WT.zip ./upload/00010023-"$BACKUP".zip
exit 0
