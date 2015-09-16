#!/bin/sh

mongoimport --db navigate --collection websites --drop --file websites.json ;
echo "websites import complete";

mongoimport --db navigate --collection QAs --drop --file QAs.json ;
echo "QAs import complete";

mongoimport --db navigate --collection profiles --drop --file profiles.json ;
echo "profiles import complete";
