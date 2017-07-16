const nextCharForNumberString = str =>
  String.fromCharCode(parseInt(str.trim()) + 1)

const result = nextCharForNumberString(' 64 ')

console.log(result)
