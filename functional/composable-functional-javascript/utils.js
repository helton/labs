const log = content => console.log(content)
const logx = (message, content) => log(`[${message}]\n=> ${content}`)

module.exports = { log, logx }
