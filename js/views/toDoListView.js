import { subscribe } from '/js/models/toDoListModel'
import { toDoItemTemplate } from '../templates/toDoItemTemplate'
import { deleteTodoController } from '../controllers/deleteTodoController'
import { updateTodoController } from '../controllers/udpateTodoController'

let view = null

export function toDoListView() {
  view = document.querySelector('#to-do-list')
  view.addEventListener('click', onHandleClick)
}

subscribe(render)

function render(data) {
  const div = document.createElement('div')
  const todoList = document.querySelector('#item-container')
  todoList.replaceChildren()

  data.forEach((item) => {
    div.prepend(toDoItemTemplate(item))
  })

  todoList.append(div)
}

function onHandleClick(e) {
  switch (e.target.id) {
    case 'delete':
      deleteTodoController(e.target.dataset.uid)
      break
    case 'edit':
      console.log(e.target.dataset.uid)
      updateTodoController(e.target.dataset.uid)
      break
  }
}
