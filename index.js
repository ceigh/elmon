#!/usr/bin/env node
const meow = require('meow')
const options = require('./src/options')
const _ = require('./src/_')

const cli = meow(options)

function run () {
  _.hello()
  _.bye(cli.pkg.version, '1.0.0')
}

if (_.isEmpty(cli)) cli.showHelp()
run()
