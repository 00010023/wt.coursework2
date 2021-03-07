#!/bin/sh
cd "$(dirname "$0")" || exit

delete() {
  if [ ! -f ./tree.txt ]; then
    rm -rf ./tree.txt
    echo "File not found!"
  fi
}

create() {
  tree -a -D -I 'node_modules|.next|yarn-error.log|dist|.git|.DS_Store|.idea' -o tree.txt
}

cd ../ || exit
delete
create
exit 0
