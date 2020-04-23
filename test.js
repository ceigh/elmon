const _ = require('./src/_')

it('is empty', () => {
  const flags = { major: false, minor: false, patch: false }
  expect(_.isEmpty(flags)).toBe(true)
})

it('is not empty', () => {
  const flags = { major: true, minor: false, patch: false }
  expect(_.isEmpty(flags)).toBe(false)
})

it('updates major', () => {
  expect(_.update('major', '0.0.0')).toBe('1.0.0')
})

it('updates minor', () => {
  expect(_.update('minor', '0.0.0')).toBe('0.1.0')
})

it('updates patch', () => {
  expect(_.update('patch', '0.0.0')).toBe('0.0.1')
})
