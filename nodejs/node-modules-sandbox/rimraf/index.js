const rimraf = require('rimraf')

rimraf('./dir1', () => {
  console.log('All files were deleted!')
})
