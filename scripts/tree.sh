#!/bin/sh
cd "$(dirname "$0")" || exit

delete() {
  if [ -f ./docs/src/.vuepress/public/tree.txt ]; then
    rm -rf ./docs/src/.vuepress/public/tree.txt
  fi
}

create() {
  tree -a -D -I 'node_modules|.next|yarn-error.log|dist|.git|.DS_Store|.idea' -o tree.txt
  mv ./tree.txt ./docs/src/.vuepress/public
}

cd ../ && delete && create || exit
exit 0
