import "./App.css";
import { useState } from "react";

function Tasks() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    alert("Task Submitted (we'll connect backend next)");
  };

  return (
    <div className="task-container">
      <h2>Add New Task</h2>

      <input
        type="text"
        placeholder="Task Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Task Description"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <button className="btn" onClick={handleSubmit}>
        Submit Task
      </button>
    </div>
  );
}

export default Tasks;