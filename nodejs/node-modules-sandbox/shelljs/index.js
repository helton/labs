const sh = require('shelljs')

// --------------------
// Example 01: Show file contents
// --------------------
const contents = sh.cat('file01.txt')
console.log(contents.toString())

// --------------------
// Example 02: Copying files
// --------------------
sh.cp('file01.txt', 'file02.txt')

// --------------------
// Example 03: Copying directories recursively
// --------------------
sh.cp('-R', 'node_modules', 'mods')
