# Node typescript skeleton

This is a skeleton for node scripts using typescript

## Pre-requisites

Current skeleton was created with:

* Node 18.2.0
* npm 8.9.0

**N.B.** strongly advised to use a node version manager ([such as NVM for windows](https://github.com/coreybutler/nvm-windows))


## Project setup

To setup the project, navigate to the same directory as this README and run `npm install`.

## Available commands
* `"npm run build"`: transpiles the typescript files, output to the `./dist` directory
* `"npm run execute"`: runs the current transpiled script with node, through entry `./dist/main.js`
* `"npm run clean"`: deletes the `./dist` directory and all contents
* `"npm run start"`: cleans, builds, and executes
* `"npm run test"`: cleans, builds, and runs all tests (spec.ts files)
* `"npm run debug"`: cleans, builds, and runs with the `--inspect` flag. Automatically hooks up the debugger and breakpoints if run from a VSCODE terminal at the `./tools/pbi-project-extraction` directory


