const { regexHashtag, regexNames, regexSpecialChar } = require('./script')

describe('regexHashtag', () => {
  test('should match the expected hashtag', () => {
    expect('#code').toMatch(regexHashtag)
  })
});

describe('Regexp names', () => {
  test('Should match name', () => {
    expect('Sylwia lives in Wrocław').toMatch(regexNames);
  });
  test('Should be a null when string is empty', () => {
    expect(''.match(regexNames)).toBeNull();
  });
  test('Should not find a name with lowercase', () => {
    const name = "adam";
    expect(name.match(regexNames)).toBeFalsy();
  });
});
