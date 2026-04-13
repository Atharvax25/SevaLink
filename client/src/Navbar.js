import { Link } from "react-router-dom";
import "./App.css";

function Navbar() {
  return (
    <div className="navbar">
      <h2 className="logo">🤝 SevaLink</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;