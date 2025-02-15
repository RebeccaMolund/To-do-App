const Input = ({ newTask, handleInputChange, addTask }) => {
  return (
    <div>
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
