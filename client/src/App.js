import 
Navbar from "./Navbar";
import "./App.css";
import heroImg from "./assets/hero.png";

function App() {
  return (
    <div>
      <Navbar />

      <div
  className="hero"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImg})`
  }}
>
  <h1 className="fade-text">Connecting People. Creating Impact.</h1>
  <p>Seamlessly linking volunteers with real-world needs</p>
  <button className="btn">Get Started</button>
</div>
      </div>
  );
}

export default App;