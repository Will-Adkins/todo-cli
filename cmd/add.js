// 1) get() list of todos from store / db
// 2) create a new todo object using the array of words sent in with the commands
//    todo add feed the cat
//    { text: "feed the cat", completed: false, id: increment id}
// 3) add the object to the array of todos
// 4) set() the array of todos to the todos.json file
// 5) list the todos

const store = require('../lib/store.js')
const { join, append } = require('ramda')

module.exports = function(arrWords) {
  // array of todos from todos.json
  const todos = store.get()

  // 2) create a new todo object using the array of words sent in with the commands
  const newTodo = createTodo(arrWords, todos.length)

  function createTodo(arrWords, id) {
    return { text: join(' ', arrWords), completed: false, id: id + 1 }
  }
  // 3) add the object to the array of todos
  const newArr = append(newTodo, todos)

  // 4) set() the array of todos to the todos.json file
  store.set(newArr)

  // 5) list the todos
}
