const nextCharForNumberString = str =>
  [str]
  .map(s => s.trim())
  .map(s => parseInt(s))
  .map(i => i + 1)
  .map(i => String.fromCharCode(i))

const result = nextCharForNumberString(' 64 ')

console.log(result)
