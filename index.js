#!/usr/bin/env node
const meow = require('meow')
const options = require('./src/options')
const _ = require('./src/_')

const cli = meow(options)

async function run () {
  _.hello()

  const { flags } = cli
  const type = _.isEmpty(flags) ? await _.prompt().type : _.getType(flags)
  console.log(type)

  _.bye(cli.pkg.version, '1.0.0')
}

run()
