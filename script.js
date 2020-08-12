const regexHashtag = /(#[a-z0-9(_)]+)/g,
      regexNames = /\b([A-ZŁŻ][a-zł]+)($|(?= ))/g,
      regexSpecialChar = /(^|(?<= ))[-!$%^&*()_+|~=`{}[:;<>?,.@#\]]($|(?= ))/g

module.exports = {
  regexHashtag,
  regexNames,
  regexSpecialChar,
}
