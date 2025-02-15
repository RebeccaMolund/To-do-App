const Input = ({ newTask, handleInputChange, addTask }) => {
  return (
    <div>
      <h1 className="mainHeader">To-do✔️</h1>
      <input
        type="text"
        placeholder="Enter a task..."
        value={newTask}
        onChange={handleInputChange}
      />
      <button className="add-button" onClick={addTask}>
        Add
      </button>
    </div>
  );
};

export default Input;
