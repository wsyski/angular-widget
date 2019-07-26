#!/usr/bin/env bash
scriptDir=$(cd `dirname $0` && pwd)
echo "scriptDir: ${scriptDir}"
find ${scriptDir}/.. -name theme -exec rm -rf {} \;
find ${scriptDir}/.. -name build -exec rm -rf {} \;
find ${scriptDir}/.. -name dist -exec rm -rf {} \;
find ${scriptDir}/.. -name out-tsc -exec rm -rf {} \;
find ${scriptDir}/.. -name node_modules -exec rm -rf {} \;
find ${scriptDir}/.. -name package-lock.json -exec rm {} \;
find ${scriptDir}/.. -name liferay-npm-bundler-report.html -exec rm {} \;
