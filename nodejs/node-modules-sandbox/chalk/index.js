const chalk = require('chalk')
const styles = require('ansi-styles')

console.log(chalk.underline.bgRed('Helton Souza'))

//chalk.blue.bgWhite.open
console.log(styles.blue.open + 'This text will be "blue"')
console.log('This text will be "blue" as well' + styles.blue.close)

//chalk.blue.bgWhite.close