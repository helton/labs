//const Either = Right || Left

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

//-------------------------------------

console.log(
  Right(3)
  .map(x =>  x + 1)
  .fold(x => "error",
        x => x)
)

console.log(
  Left(3)
  .map(x =>  x + 1)
  .fold(x => "error",
        x => x)
)

//-------------------------------------

const findColor = name =>
  fromNullable({ red: '#ff4444', blue: '#3b5998', yellow: '#fff68f' }[name])

console.log(
  findColor('red')
  .map(s => s.slice(1))
  .map(s => s.toUpperCase())
  .fold(x => "error",
        x => x)
)

console.log(
  findColor('green')
  .map(s => s.slice(1))
  .map(s => s.toUpperCase())
  .fold(x => "error",
        x => x)
)
