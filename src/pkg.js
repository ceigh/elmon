const { promisify } = require('util')
const pjio = require('package-json-io')

const readPkg = promisify(pjio.read)
const updatePkg = promisify(pjio.update)

exports.writeVersion = async v => {
  const pkg = await readPkg()
  pkg.version = v
  await updatePkg(pkg)
}

exports.getVersion = async () => {
  const pkg = await readPkg()
  return pkg.version
}
