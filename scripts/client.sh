#!/bin/sh
cd "$(dirname "$0")" || exit

basetrap() {
  if ! command -v yarn &>/dev/null; then
    npm install
  else
    yarn install
  fi
}

bootstrap() {
  if ! command -v yarn &>/dev/null; then
    npm run dev
  else
    yarn dev
  fi
}

cd ../client || exit
trap 'cd ..' 2
[ ! -d "./node_modules" ] && basetrap
bootstrap
exit 0
