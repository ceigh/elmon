const { bold } = require('kleur')

const updated = '✅ ' + bold('Version updated: 0.0.0 => 1.0.0')
const help = `
  Usage
    $ elmon, e [<version>]
    $ elmon, e [<option>]

  Options (one per call)
    --major, -M Increments X.0.0
    --minor, -m Increments 0.X.0
    --patch, -p Increments 0.0.X

  Examples
    $ elmon 1.0.0
    ${updated}
    $ e -M
    ${updated}
`

const options = {
  flags: {
    major: {
      type: 'boolean',
      alias: 'M'
    },
    minor: {
      type: 'boolean',
      alias: 'm'
    },
    patch: {
      type: 'boolean',
      alias: 'p'
    }
  }
}

module.exports = [help, options]
