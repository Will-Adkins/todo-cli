const fs = require('fs')

function get() {
  return JSON.parse(fs.readFileSync('./todos.JSON', 'utf-8'))
}

// take in data as a parameter and transform into text and
// write the text/json to the file system as the todos.json file.
function set(data) {
  fs.writeFileSync('./todos.json', JSON.stringify(data))
}

module.exports = { get: get, set: set } // or { get, set }
