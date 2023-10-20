import './App.css';
import { useState } from "react";
import { Task } from "./Task";


function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value); /*grab the value of the input*/
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask, //hier wird der Task name definiert
      completed: false,
    };

    const newTodoList = [...todoList, task]; // Add the entire task object
    setTodoList(newTodoList);
    setNewTask(""); // Clear the input after adding the task
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));//setTodoList creates an array - where the ids do not match! 
  };//wenn ich auf den button clicke, kriegt die task eine id - die filter funktion durchläuft alle Tasks in der Liste und entfernt nur die, bei der die id übereinstimmt

  const completeTask = (id) => {
   setTodoList(
     todoList.map((task) => {
       if (task.id === id) {
         return { ...task, completed: true };
       } else {
         return task;
       }
     })
   );
 };//auch hier wird on Click die id vergeben bzw. die Funtion ausgelöst. Wenn die Ids üebreinstimmen, dass wird mithilfe des Spread operators eine neue Liste erstellt, bei der cmpleted auf true gesetzt wird.

  return (
    <div className='App'>
      <div className='addTask'>
        <input onChange={handleChange} value={newTask} /> {/* Added value prop */}
        <button onClick={addTask}>Add a Todo</button>
        <div className="list">
        {todoList.map((task) => (
   <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask} completeTask={completeTask} completed={task.completed}/>
))}
        </div>
      </div>
    </div>
  );
}
export default App;