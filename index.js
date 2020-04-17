#!/usr/bin/env node
const meow = require('meow')
const options = require('./src/options')
const { hello, isNoInput } = require('./src/_')

const cli = meow(options)

function run () {
  if (isNoInput(cli)) cli.showHelp()
  hello()
  // ask questions or parse cli
  // update version in package.json
  // show success message
}

run()
