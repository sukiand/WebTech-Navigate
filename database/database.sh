#!/bin/sh

mongoimport --db navigate --collection websites --drop --file websites.json --host=127.0.0.1 ;
echo "websites import complete";

mongoimport --db navigate --collection QAs --drop --file QAs.json --host=127.0.0.1;
echo "QAs import complete";

mongoimport --db navigate --collection profiles --drop --file profiles.json  --host=127.0.0.1;
echo "profiles import complete";
