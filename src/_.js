const { bold, green, underline } = require('kleur')

exports.hello = () => console.log('🍋 ' +
  bold('Elmon will now update the version…'))

exports.bye = (v1, v2) => console.log(green('✓') +
  `  Version updated: ${underline(v1)} ⇒ ${underline(v2)}.`)

exports.isEmpty = meow => !meow.input.length &&
  Object.keys(meow.flags).every(Boolean)
