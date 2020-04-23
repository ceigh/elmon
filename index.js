#!/usr/bin/env node
const meow = require('meow')
const opts = require('./src/opts')
const _ = require('./src/_')

async function run () {
  const { flags } = meow(opts)
  const type = _.isEmpty(flags)
    ? await _.prompt() : _.getType(flags)
  const v1 = await _.getVersion()
  const v2 = _.update(type, v1)

  _.write(v2)
  _.bye(v1, v2)
}

if (require.main === module) run()
