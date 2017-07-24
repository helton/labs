const MAX = 10000

const nonOptimized = (arr) => {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    count++
  }
  return count
}
 
const optimized = (arr) => arr.length

let randomArray = []
for (let i = 0; i < MAX; i++) {
  randomArray.push(Math.random()) 
}

// console.log('randomArray', randomArray)
// console.log('nonOptimized', nonOptimized(randomArray))
// console.log('optimized', optimized(randomArray))

const Benchmark = require('benchmark')

let suite = new Benchmark.Suite
suite
  .add('nonOptimized', () => nonOptimized(randomArray))
  .add('optimized', () => optimized(randomArray))
   .on('cycle', event => console.log(event.target))
  .on('complete', function() {
    console.log('Fastest', this.filter('fastest'))
  })
  .run()