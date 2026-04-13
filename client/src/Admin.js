import "./App.css";
import adminBg from "./assets/admin-bg.png";

function Admin() {
  return (
    <div
  className="admin-container"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${adminBg})`
  }}
>
    >
      {/* TITLE */}
      <h2 className="admin-title">📊 Admin Dashboard</h2>

      {/* STATS */}
      <div className="admin-stats">

        <div className="stat-card">
          <h3>📋 Total Tasks</h3>
          <p>10</p>
        </div>

        <div className="stat-card">
          <h3>🙋 Volunteers</h3>
          <p>25</p>
        </div>

        <div className="stat-card">
          <h3>⚡ Active Tasks</h3>
          <p>7</p>
        </div>

      </div>

      {/* TASK SECTION */}
      <div className="admin-section">
        <h3>📍 Recent Tasks</h3>

        <div className="list-card">
          Food Distribution - Pune (High)
        </div>

        <div className="list-card">
          Teaching Kids - Mumbai (Medium)
        </div>

        <div className="list-card">
          Medical Camp - Delhi (High)
        </div>
      </div>

      {/* VOLUNTEER SECTION */}
      <div className="admin-section">
        <h3>👥 Volunteers</h3>

        <div className="list-card">
          Rahul - Teaching - Pune
        </div>

        <div className="list-card">
          Priya - Medical - Mumbai
        </div>

        <div className="list-card">
          Amit - Logistics - Delhi
        </div>
      </div>

    </div>
  );
}

export default Admin;