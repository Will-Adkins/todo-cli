const { head } = require('ramda')

const [execPath, jsPath, cmd, ...rest] = process.argv

console.log(handleCommand(cmd))

function handleCommand(cmd) {
  // init, rm, add commands
  switch (cmd) {
    case 'add':
      return 'asked for add cmd'
    case 'rm':
      return 'asked for rm cmd'
    case 'init':
      return 'asked for init cmd'
    default:
      return `${cmd} is not supported`
  }
}
