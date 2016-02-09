#!/bin/sh

git fetch --all

git reset --hard origin/master

npm install
npm update

bower install
bower update

echo "servers: \t1 change config of this server\n\t\t 2 change the config of the disqus, in app/components/about/disqus.js
"

echo "databses: \tupdate the databse please run the script in database folder\n"
