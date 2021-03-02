#!/bin/sh
cd "$(dirname "$0")" || exit

infos() {
  printf "Client has started in port 3000"
  printf "Server has started in port 3001"
  printf "Docs has started in port 3002"
}

client () {
  cd ./client || exit
  yarn dev
  cd ..
}

server () {
  cd ./server || exit
  yarn dev
  cd ..
}

docs () {
  cd ./docs || exit
  yarn dev
  cd ..
}

countdown() {
  sleep 5
  printf "=> 5 ...\n"
  sleep 1
  printf "=> 4 ...\n"
  sleep 1
  printf "=> 3 ...\n"
  sleep 1
  printf "=> 2 ...\n"
  sleep 1
  printf "=> 1 ...\n"
  sleep 1
  printf "=> Start\n"
  sleep 1
}

killgroup(){
  echo killing...
  kill 0
}

printf "   ______                      \n"
printf "  / ____/__  ____  ____  __  __\n"
printf " / / __/ _ \/ __ \/ __ \/ / / /\n"
printf "/ /_/ /  __/ / / / / / / /_/ / \n"
printf "\____/\___/_/ /_/_/ /_/\__, /  \n"
printf "                      /____/   \n"
printf "=> Genemator's application bootstrapper\n"
printf "=> Server will all apps paralleled, so don't pay attention to anything else!\n"
printf "=> Apps will launch in ...\n"
countdown


trap killgroup SIGINT
docs | tee ./logs/docs.log | sed -e 's/^/[Docs] /' & client | tee ./logs/client.log | sed -e 's/^/[Client] /' & server | tee ./logs/server.log | sed -e 's/^/[Server] /' & infos

