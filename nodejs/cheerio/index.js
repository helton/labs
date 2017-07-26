const cheerio = require('cheerio')

let $ = cheerio.load(`
  <ul>
    <li>1</li>
    <li>2</li>
  </ul>
`)

$('ul').append('<li>3</li>')

// ES5
$('li').each(function () {
  console.log($(this).html())
})

// ES6
$('li').each((i, el) => {
  console.log($(el).html())
})
