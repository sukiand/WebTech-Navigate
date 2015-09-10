#!/bin/sh

mongoimport --db navigate --collection websites --drop --file websites.json 
