const _ = require('./src/_')

it('updates major', () => {
  expect(_.getUpdatedVersion('major', '0.0.0')).toBe('1.0.0')
})

it('updates minor', () => {
  expect(_.getUpdatedVersion('minor', '0.0.0')).toBe('0.1.0')
})

it('updates patch', () => {
  expect(_.getUpdatedVersion('patch', '0.0.0')).toBe('0.0.1')
})
