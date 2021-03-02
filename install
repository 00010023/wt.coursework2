#!/bin/sh

installPackage() {
  if ! command -v yarn &> /dev/null
  then
    npm install
  else
    yarn install
  fi
}

cd "$(dirname "$0")" || exit
installPackage
cd ./server || exit
installPackage
cd ../
cd ./docs || exit
installPackage
cd ../
cd ./client || exit
installPackage
cd ../
printf "\n✨ Initialization completed! \n"
exit 0
