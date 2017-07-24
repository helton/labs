const request = require('request')
const cheerio = require('cheerio')
const decode = require('ent').decode

request('http://www.uol.com.br', (err, res, body) => {
  if (!err && res.statusCode === 200) {
    const $ = cheerio.load(body)
    $('title').each(function () {
      const content = decode($(this).html())
      console.log(content)
    })
  }
})
