import { addTodo } from '../models/toDoListModel'

let dialog = null
let closeButton = null
let exitButton = null
let form = null
let uid = null

export function addTodoController(itemUid) {
  dialog = document.querySelector('#create-to-do')
  exitButton = dialog.querySelector('#exit')
  closeButton = dialog.querySelector('#close')
  form = dialog.querySelector('form')

  configureListeners()
  dialog.showModal()
}

function configureListeners() {
  exitButton.addEventListener('click', onCloseDialog)
  closeButton.addEventListener('click', onCloseDialog)
  form.addEventListener('submit', onAddTodoItem)
}

function onAddTodoItem(e) {
  e.preventDefault()
  const todo = e.currentTarget.todo.value.trim()
  const category = e.currentTarget.category.value.trim()
  const status = e.currentTarget.status.value.trim()

  addTodo({
    todo,
    category,
    status,
  })
  form.reset()
}

function onCloseDialog(e) {
  dialog.close()
}
