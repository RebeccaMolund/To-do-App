import React, { useState, useEffect } from "react";
import Todo from "./listComp/Todo";
import Input from "./listComp/Input";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);

    console.log(updatedTasks);
  };

  return (
    <div className="to-do-list">
      <Input
        newTask={newTask}
        handleInputChange={handleInputChange}
        addTask={addTask}
      />

      <h2>Uncompleted Tasks</h2>
      <ol>
        {tasks.map((task, index) => (
          <div key={index}>
            {!task.completed && (
              <Todo
                index={index}
                task={task}
                toggleTaskCompletion={toggleTaskCompletion}
                deleteTask={deleteTask}
                moveTaskDown={moveTaskDown}
                moveTaskUp={moveTaskUp}
              />
            )}
          </div>
        ))}
      </ol>

      <h2>Completed tasks</h2>
      <ol>
        {tasks.map((task, index) => (
          <div key={index}>
            {task.completed && (
              <Todo
                index={index}
                task={task}
                toggleTaskCompletion={toggleTaskCompletion}
                deleteTask={deleteTask}
                moveTaskDown={moveTaskDown}
                moveTaskUp={moveTaskUp}
              />
            )}
          </div>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
