const { head } = require('ramda')
const add = require('./cmd/add')
const ls = require('./cmd/ls')

const [execPath, jsPath, cmd, ...rest] = process.argv

console.log(handleCommand(cmd))

function handleCommand(cmd) {
  // init, rm, add, ls commands
  switch (cmd) {
    case 'add':
      return add(rest)
    case 'rm':
      return 'asked for rm cmd'
    case 'init':
      return 'asked for init cmd'
    case 'ls':
      return ls()
    default:
      return `${cmd} is not supported`
  }
}
