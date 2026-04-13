import "./App.css";
import { useState } from "react";

function Volunteer() {
  const [name, setName] = useState("");
  const [skills, setSkills] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = () => {
    const data = {
      name,
      skills,
      location
    };

    console.log(data);
    alert("Registered Successfully 🚀");
  };

  return (
    <div className="task-wrapper">

      <div className="task-card">

        <h2>Join as Volunteer</h2>

        <p className="task-desc">
          Become a part of SevaLink and contribute your skills to help communities.
        </p>

        {/* NAME */}
        <input
          type="text"
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
        />

        {/* SKILLS */}
        <input
          type="text"
          placeholder="Your Skills (e.g. Teaching, Medical Help)"
          onChange={(e) => setSkills(e.target.value)}
        />

        {/* LOCATION */}
        <input
          type="text"
          placeholder="Your Location"
          onChange={(e) => setLocation(e.target.value)}
        />

        {/* BUTTON */}
        <button className="btn" onClick={handleSubmit}>
          Register
        </button>

        <p className="task-note">
          💡 Tip: Add clear skills to get matched with the right tasks
        </p>

      </div>

    </div>
  );
}

export default Volunteer;