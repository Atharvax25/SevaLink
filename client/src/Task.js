import { useState } from "react";
import "./App.css";

function Task() {
  const [task, setTask] = useState("");
  const [location, setLocation] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    alert(
      `Task: ${task}\nLocation: ${location}\nPriority: ${priority}\nDescription: ${description}`
    );
  };

  return (
    <div className="main">
      <div className="overlay">

        <div className="card">
          <h2>Add NGO Task</h2>

          <input
            className="input"
            placeholder="Enter Task"
            onChange={(e) => setTask(e.target.value)}
          />

          <input
            className="input"
            placeholder="Enter Location"
            onChange={(e) => setLocation(e.target.value)}
          />

          <select
            className="input"
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>Select Priority</option>
            <option>High 🔴</option>
            <option>Medium 🟡</option>
            <option>Low 🟢</option>
          </select>

          <textarea
            className="input"
            placeholder="Enter Description"
            onChange={(e) => setDescription(e.target.value)}
          />

          <button className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>

      </div>
    </div>
  );
}

export default Task;