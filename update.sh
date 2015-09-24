#!/bin/sh

git fetch --all

git reset --hard origin/master

npm install

bower install

echo "servers: \t1 change No. of this server\n\t\t 2 change the url of the database"

echo "databses: \tupdate the databse please run the script in database folder\n"
