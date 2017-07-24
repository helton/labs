const fetch = require('node-fetch')

const url = 'http://httpbin.org/get?t=1';
 
// fetch(url)
//   .then(res => res.json())
//   .then(json => console.log(json))

(async () => {
  const res = await fetch(url)
  const json = await res.json()
  console.log(json)
})()

const urlPost = 'http://httpbin.org/post'
fetch(urlPost, { method: 'POST', body: 'helton=souza' })
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err))
