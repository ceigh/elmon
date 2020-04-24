const prompts = require('prompts')
const { green, gray, underline } = require('kleur')

exports.getUpdType = flags => {
  const usedFlags = Object.keys(flags).filter(f => flags[f])
  if (usedFlags.length) return usedFlags[0]
}

exports.getUpdTypePrompt = async () => {
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

exports.getUpdatedVersion = (type, v1) => {
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

exports.showInfo = (v1, v2) => console.log(green('✔') +
  ` Version updated: ${underline(v1)} ${gray('›')} ${underline(v2)}`)
