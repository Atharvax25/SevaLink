import heroImg from "./assets/hero.png";
import "./App.css";

function Home() {
  return (
    <div>
      {/* HERO */}
      <div
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImg})`
        }}
      >
        <div className="hero-content">
          <h1>Connecting People. Creating Impact.</h1>
          <p>Seamlessly linking volunteers with real-world needs</p>

          <div className="hero-buttons">
            <button className="btn">Get Started</button>
            <button className="btn-outline">Learn More</button>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="about">
        <h2>About SevaLink</h2>
        <p>
          SevaLink connects NGOs with volunteers and helps create real impact.
        </p>
      </div>

      {/* FEATURES (CARDS BACK 🔥) */}
      <div className="features">
  <div className="card">
    <div className="icon">📍</div>
    <h3>Add Tasks</h3>
    <p>NGOs can post tasks and manage needs بسهولة</p>
  </div>

  <div className="card">
    <div className="icon">🙋</div>
    <h3>Volunteers</h3>
    <p>People can join and contribute to real-world impact</p>
  </div>

  <div className="card">
    <div className="icon">⚡</div>
    <h3>Smart Match</h3>
    <p>Automatically connect the right people to tasks</p>
  </div>
</div>
  );
}

export default Home;