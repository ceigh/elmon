module.exports = {
  help: `
    Usage
      $ {elmon|e} [<option>]

    Options
      --major, -M Increment X.0.0
      --minor, -m Increment 0.X.0
      --patch, -p Increment 0.0.X

    Examples
      $ elmon --major
      $ e -p
      $ e`,

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
