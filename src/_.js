const { green, gray, underline } = require('kleur')
const prompts = require('prompts')
const pkg = require('package-json-io')
const shell = require('shelljs')

exports.bye = (v1, v2) => console.log(green('✔') +
  ` Version updated: ${underline(v1)} ${gray('›')} ${underline(v2)}`)

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

exports.update = (type, v1) => {
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

exports.write = v => {
  return new Promise((resolve, reject) => {
    pkg.read((err, data) => {
      if (err) reject(err)
      data.version = v

      pkg.update(data, e => {
        if (e) reject(e)
        resolve()
      })
    })
  })
}

exports.getVersion = () => {
  return new Promise((resolve, reject) => {
    pkg.read((e, data) => {
      if (e) reject(e)
      resolve(data.version)
    })
  })
}

exports.add = () => {
  if (!shell.which('git')) return
  shell.exec(`git add ${process.cwd()}/package.json`)
}
