const { bold, green, underline } = require('kleur')
const prompts = require('prompts')

exports.hello = () => console.log('🍋 ' +
  bold('Elmon will now update the version…'))

exports.bye = (v1, v2) => console.log(green('✓') +
  `  Version updated: ${underline(v1)} ⇒ ${underline(v2)}`)

exports.isEmpty = flags => !Object.keys(flags).some(f => flags[f])
exports.getType = flags => Object.keys(flags).filter(f => flags[f])[0]

exports.prompt = async () => {
  const resp = await prompts({
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
  return resp.type
}

exports.update = (v1, type) => {
  const nums = v1.split('.').map(v => +v)
  switch (type) {
    case 'major':
      ++nums[0]
      break
    case 'minor':
      ++nums[1]
      break
    case 'patch':
      ++nums[2]
      break
  }
  return nums.join('.')
}
