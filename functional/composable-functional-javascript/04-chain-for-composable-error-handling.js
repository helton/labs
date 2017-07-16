const { Left, Right } = require('./functional')
const { logx } = require('./utils.js')
const fs = require('fs')

const getPort = () => {
  try {
    const str = fs.readFileSync('config.json')
    const config = JSON.parse(str)
    return config.port
  } catch (e) {
    return 3000
  }
}

console.log(
  getPort()
)
