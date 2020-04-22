const _ = require('./src/_')

it('should be empty', () => {
  const flags = { major: false, minor: false, patch: false }
  expect(_.isEmpty(flags)).toBe(true)
})

it('should not be empty', () => {
  const flags = { major: true, minor: false, patch: false }
  expect(_.isEmpty(flags)).toBe(false)
})
