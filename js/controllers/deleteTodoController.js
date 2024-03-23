import { deleteTodo } from '../models/toDoListModel'

let dialog = null
let deleteButton = null
let exitButton = null
let uid = null

export function deleteTodoController(itemUid) {
  uid = itemUid
  dialog = document.querySelector('#delete-to-do')
  exitButton = dialog.querySelector('#exit')
  deleteButton = dialog.querySelector('#delete')
  configureListener()
  dialog.showModal()
}

function configureListener() {
  exitButton.addEventListener('click', onCloseDialog)
  deleteButton.addEventListener('click', onRemoveTodo)
}

function onCloseDialog() {
  dialog.close()
}

function onRemoveTodo(e) {
  deleteTodo(uid)
  onCloseDialog()
}
