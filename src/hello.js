const { bold } = require('kleur')

function hello () {
  console.log('🍋 ' +
    bold('Elmon will now update the version of your package.'))
}

module.exports = hello
