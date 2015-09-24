#!/bin/sh

netstat -anl | grep 300

killall node

netstat -anl | grep 300

echo "restart"
nohup npm start > ~/log/log.txt &
