#!/usr/bin/env node
const { bold } = require('kleur')

function hello () {
  console.log('🍋 ' + bold('Elmon will now update the version.'))
}

async function run () {
  hello()
  // ask questions or parse command line
  // update version in package.json
  // show success message
}

run()
