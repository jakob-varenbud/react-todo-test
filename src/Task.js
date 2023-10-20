export const Task = (props) => {
    return (
      <div
      style= {{backgroundColor: props.completed ? "green" : "white"}} 
      key={props.id}>
        
        <h1>{props.taskName}</h1> {/* Display the taskName */}
        <button onClick={() => props.deleteTask(props.id)}>X</button>
        <button onClick={() => props.completeTask(props.id)}>Complete</button>
      </div>
    );
  };