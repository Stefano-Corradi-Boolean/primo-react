const tasks = [
  "Buy groceries",
  "Clean the house",
  "Finish the project",
  "Call mom",
  "Read a book"
];
import { useState } from "react";
const TodoListVBase = () => {

  const [todoList, setTodoList] = useState(tasks);
  const [newTask, setNewTask] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();
    // creo un clone e della todoList e aggiungo il nuovo elemento
    setTodoList([newTask, ...todoList])
  }


  return (
    <div className="container my-5">

      <form action="#" onSubmit={handlerSubmit}>
        <div className="input-group mb-3">
          <input
            className="form-control"
            placeholder="Todo"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            type="text"
          />
          <button
            className="btn btn-outline-secondary"
            type="submit"
          >Invia</button>
        </div>
      </form>

      <ul className="list-group">
        {todoList.map((task, index) => (
          <li key={index} className="list-group-item">{task}</li>

        ))}

      </ul>
    </div>
  )
}

export default TodoListVBase
