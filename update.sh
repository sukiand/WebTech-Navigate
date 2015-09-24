#!/bin/sh

git fetch --all

git reset --hard origin/master

echo "servers: 1 change No. of this server\n\t\t 2 change the url of the database"
echo "databses: update the databse please run the script in database folder\n"
