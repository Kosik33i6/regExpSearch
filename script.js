const regexHashtag = /#[a-z0-9_]+/gm,
  regexNames = /(^|(?<=\s))([A-ZŁŻ][a-zł]+)($|(?=\s))/g,
  regexSpecialChar = /(^|(?<=\s))[-!$%^&*()_+|~=`{}[:;<>?,.@#\]]($|(?=\s))/g

module.exports = {
  regexHashtag,
  regexNames,
  regexSpecialChar,
}
