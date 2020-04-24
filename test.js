const _ = require('./src/_')

describe('update', () => {
  it('updates major', () => {
    expect(_.getUpdatedVersion('major', '0.0.0')).toBe('1.0.0')
  })
  it('updates minor', () => {
    expect(_.getUpdatedVersion('minor', '0.0.0')).toBe('0.1.0')
  })
  it('updates patch', () => {
    expect(_.getUpdatedVersion('patch', '0.0.0')).toBe('0.0.1')
  })
})

describe('update type', () => {
  it('gets updType', () => {
    const flags = { major: false, minor: true, patch: false }
    expect(_.getUpdType(flags)).toBe('minor')
  })
  it('returns undefined on no updType', () => {
    const flags = { major: false, minor: false, patch: false }
    expect(_.getUpdType(flags)).toBeUndefined()
  })
})
