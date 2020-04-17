#!/usr/bin/env node
const meow = require('meow')
const config = require('./src/cli')
const hello = require('./src/hello')

const cli = meow(...config)

async function run () {
  hello()
  console.log(cli)
  // ask questions or parse cli
  // update version in package.json
  // show success message
}

run()
