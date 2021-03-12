#!/bin/sh
cd "$(dirname "$0")" || exit

cleaner() {
  # Cleaning up base project directory
  [ -d "./node_modules" ] && echo "Deleting base node_modules"
  [ -d "./node_modules" ] && rm -rf ./node_modules
  [ -d "./.DS_Store" ] && rm -rf ./.DS_Store
  [ -d "./upload" ] && rm -rf ./upload

  # Cleaning up client's directory
  client() {
    [ -d "./node_modules" ] && echo "Deleting client's node_modules"
    [ -d "./node_modules" ] && rm -rf ./node_modules

    [ -d "./.next" ] && echo "Deleting next caches"
    [ -d "./.next" ] && rm -rf ./.next
  }
  cd ./client && client && cd .. || echo "Are you sure that server does exist?"

  # Cleaning up server's directory
  server() {
    [ -d "./node_modules" ] && echo "Deleting server's node_modules"
    [ -d "./node_modules" ] && rm -rf ./node_modules

    [ -f "./.env" ] && echo "Removing server's node_modules"
    [ -f "./.env" ] && cp ./.env ~/Documents/dotenv.backup
    [ -f "./.env" ] && rm -rf ./node_modules
  }
  cd ./server && server && cd .. || echo "Are you sure that server does exist?"

  # Cleaning up documentation website's directory
  docs() {
    [ -d "./node_modules" ] && echo "Deleting documentation's node_modules"
    [ -d "./node_modules" ] && rm -rf ./node_modules
  }
  cd ./docs && docs && cd .. || echo "Are you sure that documentation does exist?"
}

cd .. && cleaner
exit 0
