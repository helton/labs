const { Left, Right } = require('./functional')
const { logx } = require('./utils.js')
const fs = require('fs')

const getPort = (fileName) => {
  try {
    const str = fs.readFileSync(fileName)
    const config = JSON.parse(str)
    return config.port
  } catch (e) {
    return 3000
  }
}

logx('getPort() with existent file',
  getPort('config.json')
)
