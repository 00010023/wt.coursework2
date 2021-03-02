#!/bin/sh
cd "$(dirname "$0")" || exit
cd ./scripts/ || exit
./update-client.sh
./update-server-doc.sh
