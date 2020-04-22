const { bold, green, underline } = require('kleur')
const prompts = require('prompts')

exports.hello = () => console.log('🍋 ' +
  bold('Elmon will now update the version…'))

exports.bye = (v1, v2) => console.log(green('✓') +
  `  Version updated: ${underline(v1)} ⇒ ${underline(v2)}.`)

exports.isEmpty = flags => !Object.keys(flags).some(f => flags[f])
exports.getType = flags => Object.keys(flags).filter(f => flags[f])[0]

exports.prompt = async () => {
  return await prompts({
    type: 'select',
    name: 'type',
    message: 'Choose version update type',
    choices: [
      { title: 'Major', description: 'Increment major version', value: 'major' },
      { title: 'Minor', description: 'Increment minor version', value: 'minor' },
      { title: 'Patch', description: 'Increment patch version', value: 'patch' }
    ],
    initial: 1
  })
}
