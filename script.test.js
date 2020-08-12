const { regexHashtag, regexNames, regexSpecialChar } = require('./script')

describe('regexHashtag', () => {
  test('should match the expected hashtag', () => {
    expect('#code').toMatch(regexHashtag)
  })
})
