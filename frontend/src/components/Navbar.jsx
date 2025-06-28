import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('🚪 Logged out successfully');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <h1>🌿 Carbon Tracker</h1>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        {token && <Link to="/add">Add Emission</Link>}
        {token && <Link to="/dashboard">Dashboard</Link>}
        <Link to="/feedback">Feedback</Link>
        <Link to="/view-feedback">View Feedback</Link>

        {!token ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        ) : (
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
