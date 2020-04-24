#!/usr/bin/env node
const meow = require('meow')
const opts = require('./src/opts')
const pkg = require('./src/pkg')
const _ = require('./src/_')

async function run () {
  const { flags } = meow(opts)
  const updateType = _.getUpdType(flags) ||
    await _.getUpdTypePrompt()

  const v1 = await pkg.getVersion()
  const v2 = _.getUpdatedVersion(updateType, v1)

  await pkg.writeVersion(v2)
  _.showInfo(v1, v2)
}

if (require.main === module) run()
