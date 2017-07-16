const { Left, Right, fromNullable } = require('./functional')
const { logx } = require('./utils.js')

//-------------------------------------

logx('Using Right',
  Right(3)
  .map(x =>  x + 1)
  .fold(x => "error",
        x => x)
)

logx('Using Left',
  Left(3)
  .map(x =>  x + 1)
  .fold(x => "error",
        x => x)
)

//-------------------------------------

const findColor = name =>
  fromNullable({ red: '#ff4444', blue: '#3b5998', yellow: '#fff68f' }[name])

logx("findColor('red')",
  findColor('red')
  .map(s => s.slice(1))
  .map(s => s.toUpperCase())
  .fold(x => "error",
        x => x)
)

logx("findColor('green')",
  findColor('green')
  .map(s => s.slice(1))
  .map(s => s.toUpperCase())
  .fold(x => "error",
        x => x)
)
