import { getStore } from '../models/store'
import { updateTodo } from '../models/toDoListModel'

let dialog = null
let closeButton = null
let exitButton = null
let form = null
let uid = null

export function updateTodoController(itemUid) {
  uid = itemUid
  const todo = getStore().find((item) => item.uid === itemUid)
  dialog = document.querySelector('#update-to-do')
  exitButton = document.querySelector('#exit')
  closeButton = document.querySelector('#close')
  form = document.querySelector('form')

  configUi(todo)
  configureListeners()
  dialog.showModal()
}

function configUi(item) {
  dialog.querySelector('#todo').value = item.todo
  dialog.querySelector('#category').value = item.category
  dialog.querySelector('#status').value = item.status
}

function configureListeners() {
  exitButton.addEventListener('click', onCloseDialog)
  closeButton.addEventListener('click', onCloseDialog)
  form.addEventListener('submit', onUpdateTodoItem)
}

function onUpdateTodoItem(e) {
  e.preventDefault()
  const todo = e.currentTarget.todo.value.trim()
  const category = e.currentTarget.category.value.trim()
  const status = e.currentTarget.status.value.trim()

  updateTodo({
    todo,
    category,
    status,
    uid,
  })
}

function onCloseDialog(e) {
  dialog.close()
}
