const { promisify } = require('util')
const pjio = require('package-json-io')

const read = promisify(pjio.read)
const update = promisify(pjio.update)

exports.writeVersion = async v => {
  const p = await read()
  p.version = v
  await update(p)
}

exports.getVersion = async () => {
  const p = await read()
  return p.version
}
