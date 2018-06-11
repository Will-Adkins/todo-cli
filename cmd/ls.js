const store = require('../lib/store')
const { compose, join, map } = require('ramda')

module.exports = function() {
  // * 1) get() todo list from the store
  // * 2) draw a header
  // * 3) map over todo list and produce list item for each todo object
  // * 4)    create a li function for map; take in object, return string
  // * 5) draw a footer
  // * 6) return the result
  //
  // My To Do list
  // ---------------------------
  // [x] - 1 text
  // ---------------------------
  //
  const todos = store.get()

  const li = function(todo) {
    return `[${todo.completed ? 'X' : ' '}] - ${todo.id} ${todo.text}`
  }

  const mappedListItems = compose(
    join('\n  '),
    map(li)
  )(todos)

  const result = `
  My To Do list
  ---------------------------
  ${mappedListItems}
  ---------------------------`

  return result
}
