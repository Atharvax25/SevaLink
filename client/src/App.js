import "./App.css";
import Navbar from "./Navbar";
import heroImg from "./assets/hero.png";

function App() {
  return (
    <div>
      <Navbar />

      {/* HERO */}
      <div
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImg})`
        }}
      >
        <div className="hero-content">
          <h1 className="fade-text">
            Connecting People. Creating Impact.
          </h1>

          <p>
            Seamlessly linking volunteers with real-world needs through SevaLink
          </p>

          <div className="hero-buttons">
            <button className="btn">Get Started</button>
            <button className="btn-outline">Learn More</button>
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="about">
        <h2>About SevaLink</h2>
        <p>
          SevaLink connects NGOs with passionate volunteers, making it easier
          to manage tasks and create meaningful social impact through technology.
        </p>
      </div>

      {/* FEATURES SECTION */}
      <div className="features">
        <div className="card">
          <h3>📍 Add Tasks</h3>
          <p>NGOs can post tasks and requirements easily.</p>
        </div>

        <div className="card">
          <h3>🙋 Volunteers</h3>
          <p>Users can register and help in real-world activities.</p>
        </div>

        <div className="card">
          <h3>⚡ Smart Match</h3>
          <p>Automatically connects the right people to the right tasks.</p>
        </div>
      </div>
    </div>
  );
}

export default App;