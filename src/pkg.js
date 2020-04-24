const { join } = require('path')
const { promisify } = require('util')
const pjio = require('package-json-io')
const simpleGit = require('simple-git/promise')

const read = promisify(pjio.read)
const update = promisify(pjio.update)
const git = simpleGit()

exports.writeVersion = async v => {
  const p = await read()
  p.version = v
  await update(p)
}

exports.getVersion = async () => {
  const p = await read()
  return p.version
}

exports.addToGit = async () => {
  await git.add(join(process.cwd(), 'package.json'))
}
