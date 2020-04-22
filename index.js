#!/usr/bin/env node
const meow = require('meow')
const options = require('./src/options')
const _ = require('./src/_')

async function run () {
  _.hello()

  const cli = meow(options)
  const { flags } = cli

  const type = _.isEmpty(flags) ? await _.prompt() : _.getType(flags)
  const v1 = cli.pkg.version
  const v2 = _.update(v1, type)

  _.bye(v1, v2)
}

if (require.main === module) run()
