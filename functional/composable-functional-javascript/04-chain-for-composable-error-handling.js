const { Left, Right, tryCatch } = require('./functional')
const { logx } = require('./utils.js')
const fs = require('fs')

const getPort = (fileName) =>
  tryCatch(() => fs.readFileSync(fileName))
  .chain(str => tryCatch(() => JSON.parse(str)))
  .map(config => config.port)
  .fold(e => 1000,
        x => x)

logx('getPort() with existent file',
  getPort('config.json')
)

logx('getPort() with nonexistent file',
  getPort('unknown.json')
)
