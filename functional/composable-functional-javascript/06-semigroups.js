const { log, logx } = require('./utils.js')

logx('Semigroup String',
  'a'.concat('b').concat('c')
)

logx('Semigroup Array (using associativity law)',
  [1, 2].concat([3, 4].concat([5, 6]))
)

const Sum = x => ({
  x,
  concat: ({x : y}) => Sum(x + y),
  inspect: () => `Sum(${x})`
})

logx("Sum Semigroup",
  Sum(1).concat(Sum(2))
)

const All = x => ({
  x,
  concat: ({x : y}) => All(x && y),
  inspect: () => `All(${x})`
})

<<<<<<< HEAD
logx("All Semigroup - example 2",
=======
logx("All Semigroup - example 1",
>>>>>>> Create types with Semigroups
  All(true).concat(All(false))
)

logx("All Semigroup - example 2",
  All(true).concat(All(true))
)

const First = x => ({
  x,
  concat: _ => First(x),
  inspect: () => `First(${x})`
})

logx("First Semigroup",
  First('blah').concat('foo').concat('bar').concat(First('second'))
)
