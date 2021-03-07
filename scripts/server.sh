#!/bin/sh
cd "$(dirname "$0")" || exit

bootstrap() {
  if ! command -v yarn &>/dev/null; then
    npm run dev
  else
    yarn dev
  fi
}

cd ../server || exit
bootstrap
exit 0
