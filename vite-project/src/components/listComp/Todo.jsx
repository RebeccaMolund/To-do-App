const Todo = ({
  toggleTaskCompletion,
  index,
  task,
  deleteTask,
  moveTaskUp,
  moveTaskDown,
}) => {
  return (
    <li className="taskItems" key={index}>
      <span
        className={`text ${task.completed ? "completed" : ""}`}
        onClick={() => toggleTaskCompletion(index)}
      >
        {task.text}
      </span>
      <div className="LiButtons">
        <button className="delete-button" onClick={() => deleteTask(index)}>
          <div className="icon">❌</div>
        </button>
        <button className="move-button" onClick={() => moveTaskUp(index)}>
          <div className="icon">👆</div>
        </button>
        <button className="move-button" onClick={() => moveTaskDown(index)}>
          <div className="icon">👇</div>
        </button>
      </div>
    </li>
  );
};

export default Todo;
