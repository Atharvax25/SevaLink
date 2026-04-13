import "./App.css";

function Navbar() {
  return (
    <div className="navbar">
      <h2 className="logo">🤝 SevaLink</h2>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Tasks</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;