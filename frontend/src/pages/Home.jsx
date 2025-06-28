// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // We'll create this

function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to the Carbon Combustion Tracker</h1>
        <p>
          This project helps you record, monitor, and analyze carbon emissions 
          caused by various combustion activities such as fuel usage, industrial processes, and more.
        </p>
        <p>
          You can easily add new emission records and view all your previously recorded emissions 
          in a clean and organized interface.
        </p>
       <div className="home-buttons">
  <Link to="/add" className="btn">Add Emission</Link>
  <Link to="/dashboard" className="btn secondary">View Emissions</Link>
</div>

      </section>
    </div>
  );
}

export default Home;
