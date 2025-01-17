const tasks = [
  { id: 1, text: "Read React documentation" },
  { id: 2, text: "Complete React tutorial" },
  { id: 3, text: "Build a simple React app" },
  { id: 4, text: "Learn about React hooks" },
  { id: 5, text: "Understand React state management" },
  { id: 6, text: "Explore React Router" },
  { id: 7, text: "Study React context API" },
  { id: 8, text: "Practice React component lifecycle" },
  { id: 9, text: "Learn about React performance optimization" },
  { id: 10, text: "Build a complex React project" }
];

import { useState } from "react";
const TodoListPro = () => {

  const [todoList, setTodoList] = useState(tasks);
  const [newTask, setNewTask] = useState({ text: '' });
  const [search, setSearch] = useState('')

  const handlerSubmit = (e) => {
    e.preventDefault();
    // creo un clone e della todoList e aggiungo il nuovo elemento
    setTodoList([newTask, ...todoList])
  }

  const handlerNewTask = (e) => {
    const newTask = {
      id: Date.now(),
      text: e.target.value
    }
    setNewTask(newTask)
  }

  const hadlerRemoveTask = (id) => {
    const newTaskList = todoList.filter(task => task.id !== id)
    setTodoList(newTaskList)
  }

  const handlerSearch = (e) => {
    e.preventDefault()
    const newTodoList = todoList.filter(task => task.text.toLowerCase().includes(search.toLowerCase()));
    setTodoList(newTodoList)
  }


  return (
    <div className="container my-5">

      <form action="" onSubmit={handlerSearch}>
        <div className="input-group mb-3">
          <input
            className="form-control"
            placeholder="Cerca"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
          />
          <button
            className="btn btn-outline-secondary"
            type="submit"
          >cerca</button>
        </div>

      </form>

      <form action="#" onSubmit={handlerSubmit}>
        <div className="input-group mb-3">
          <input
            className="form-control"
            placeholder="Todo"
            value={newTask.text}
            onChange={handlerNewTask}
            type="text"
          />
          <button
            className="btn btn-outline-secondary"
            type="submit"
          >Invia</button>
        </div>
      </form>

      <ul className="list-group">
        {todoList.map(task => (
          <li key={task.id} className="list-group-item d-flex justify-content-between">
            <span>{task.text}</span>
            <i
              className="fa-solid fa-trash-can trash"
              onClick={() => hadlerRemoveTask(task.id)}
            ></i>
          </li>

        ))}

      </ul>
    </div>
  )
}

export default TodoListPro
