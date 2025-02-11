import React, { useState, useEffect } from "react";


const TodoList = () => { 
     const [tasks, setTasks] = useState([]);
     const [newTask, setNewTask] = useState("");

     // Ladda tasks från localStorage när komponenten mountas
    useEffect(() => {
        const savedTasks = localStorage.getItem("tasks");
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    // Spara tasks till localStorage när tasks ändras
    useEffect(() => {
        if (tasks.length > 0) {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }, [tasks]);

     const handleInputChange = (event) => {
        setNewTask(event.target.value);

     }

     const addTask = () => {
        if(newTask.trim() !== ""){
            setTasks(t => [...t, { text: newTask, completed: false }]);
            setNewTask("");}
     }

     const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
     }

     const moveTaskUp = (index) => {
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
     }

     const moveTaskDown = (index) => {
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
     }

     const toggleTaskCompletion = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    }

    return ( 
        <div className="to-do-list">
        <h1>To-do-List</h1>

        <div>
            <input 
            type="text" 
            placeholder="Enter a task..." 
            value={newTask}
            onChange={handleInputChange}/>
            <button 
            className="add-button"
            onClick={addTask}>
                Add
            </button>
        </div>

        <ol>
            {tasks.map((task, index) =>
                <li key={index}>
                    <span className={`text ${task.completed ? "completed" : ""}`} onClick={() => toggleTaskCompletion(index)}>{task.text}</span>
                    <button 
                    className="delete-button"
                    onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                    <button 
                    className="move-button"
                    onClick={() => moveTaskUp(index)}>
                        👆
                    </button>
                    <button 
                    className="move-button"
                    onClick={() => moveTaskDown(index)}>
                        👇
                    </button>
                </li>
            )}
        </ol>

        </div>
     );
}
 
export default TodoList;