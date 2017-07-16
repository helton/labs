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

const result =
  Right(3)
  .map(x =>  x + 1)
  .fold(x => "error", x => x)

console.log(result)
