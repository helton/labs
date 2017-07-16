const Right = x => ({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`
})

const Left = x => ({
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`
})

const fromNullable = value =>
  value != null ? Right(value) : Left(null)

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
