#!/bin/bash
bower init
npm init
npm install
bower install
bower install jquery --save
bower install bootstrap --save
gulp build
