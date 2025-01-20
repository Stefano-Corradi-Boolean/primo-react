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

import { useState, useEffect } from "react";
const TodoListPro = () => {

  const initialTask = { text: '' };

  const [todoList, setTodoList] = useState(tasks);
  const [filteredList, setFilteredList] = useState(tasks);
  const [newTask, setNewTask] = useState(initialTask);
  const [editTask, setEditTask] = useState(initialTask);
  const [search, setSearch] = useState('')
  const [isEditMode, setIsEditMode] = useState(false);

  const handlerSubmit = (e) => {
    e.preventDefault();
    // creo un clone e della todoList e aggiungo il nuovo elemento
    setTodoList([newTask, ...todoList])
    setNewTask(initialTask)
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

  useEffect(() => {
    setFilteredList(todoList.filter(task => task.text.toLowerCase().includes(search.toLowerCase())))
  }, [search, todoList])

  const hamdlerSubmitEdit = (e) => {
    e.preventDefault();
    // logica di edit....
    console.log(editTask);
    const newTodoList = todoList.map(task => editTask.id == task.id ? editTask : task);
    setTodoList(newTodoList);
    // nascondo il form di edit
    setIsEditMode(false)
  }

  const handlerEditTask = (e) => {
    setEditTask({ ...editTask, text: e.target.value })
  }

  const handlerSetEditTask = (id) => {
    const taskToEdit = todoList.find(task => task.id == id)
    setEditTask(taskToEdit);
    setIsEditMode(true)
  }


  return (
    <div className="container my-5">
      {/* SEARCH  */}
      <input
        className="form-control my-3"
        placeholder="Cerca"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
      />
      {/* CREATE */}
      <form action="#" onSubmit={handlerSubmit}>
        <div className="input-group mb-3">
          <input
            className="form-control"
            placeholder="Nuovo Todo"
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

      {/* EDIT  */}
      {isEditMode && (<form action="#" onSubmit={hamdlerSubmitEdit} >
        <div className="input-group mb-3">
          <input
            className="form-control"
            placeholder="Modifica Todo"
            value={editTask.text}
            onChange={handlerEditTask}
            type="text"
          />
          <button
            className="btn btn-outline-secondary"
            type="submit"
          >Modifica</button>
        </div>
      </form>)}

      <ul className="list-group">
        {filteredList.map(task => (
          <li key={task.id} className="list-group-item d-flex justify-content-between">
            <span>{task.text}</span>
            <div>
              <i
                className="fa-solid fa-pencil me-2"
                onClick={() => handlerSetEditTask(task.id)}
              ></i>
              <i
                className="fa-solid fa-trash-can trash"
                onClick={() => hadlerRemoveTask(task.id)}
              ></i>
            </div>
          </li>

        ))}

      </ul>
    </div>
  )
}

export default TodoListPro
