const { regexHashtag, regexNames, regexSpecialChar } = require('./script')

describe('RegExp hashtag:', () => {
  test('should match the expected hashtag, when it is only one', () => {
    expect('#code').toMatch(regexHashtag)
  })
  test('should not search hashtag in empty string', () => {
    expect(regexHashtag.test('')).toBeFalsy()
  })
  test('should not search hashtag when it starts from an uppercase letter', () => {
    expect(regexHashtag.test('#Dev')).toBeFalsy()
  }) 
  test('should not search hashtag when it starts from a special character', () => {
    expect(regexHashtag.test('#!hi')).toBeFalsy()
  }) 
  test('should not search hashtag when it is only special character #', () => {
    expect(regexHashtag.test('#')).toBeFalsy()
  }) 
  test('should search hashtags when they are separated by spaces', () => {
    expect('#code #gladiator #1exercise'.match(regexHashtag)).toEqual(['#code', '#gladiator', '#1exercise'])
  }) 
  test('should search hashtags when they are not separated by spaces', () => {
    expect('#code#gladiator#1exercise'.match(regexHashtag)).toEqual(['#code', '#gladiator', '#1exercise'])
  }) 
})

describe('RegExp special character:', () => {
  test('should match the expected special character, when it is only one', () => {
    expect('@').toMatch(regexSpecialChar)
  })
  test('should not search special character in empty string', () => {
    expect(regexSpecialChar.test('')).toBeFalsy()
  })
  test('should not search the special character when it is in the meadle of the word', () => {
    expect(regexSpecialChar.test('co!de')).toBeFalsy()
  }) 
  test('should not search the special character when it is in the front of the word', () => {
    expect(regexSpecialChar.test('#code')).toBeFalsy()
  }) 
  test('should not search the special character when it is in the end of the word', () => {
    expect(regexSpecialChar.test('code!')).toBeFalsy()
  }) 
  test('should search the special characters when they are separated by spaces', () => {
    expect('I like code , eat + cook.'.match(regexSpecialChar)).toEqual([',', '+'])
  }) 
  test('should search the special characters when they are separated by spaces and place in the front and the end of string', () => {
    expect('- code and fun !'.match(regexSpecialChar)).toEqual(['-', '!'])
  }) 
})
