const { head } = require('ramda')
const add = require('./cmd/add')
const [execPath, jsPath, cmd, ...rest] = process.argv

// console.log(handleCommand(cmd))

function handleCommand(cmd) {
  // init, rm, add, list commands
  switch (cmd) {
    case 'add':
      return add(rest)
    case 'rm':
      return 'asked for rm cmd'
    case 'init':
      return 'asked for init cmd'
    case 'list':
      return 'asked for list cmd'
    default:
      return `${cmd} is not supported`
  }
}
