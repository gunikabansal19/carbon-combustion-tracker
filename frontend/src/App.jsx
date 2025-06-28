import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AddEmission from './pages/AddEmission';
import Dashboard from './pages/Dashboard';
import Feedback from './pages/Feedback';
import ViewFeedback from './pages/ViewFeedback';
import NotFound from './pages/NotFound';

import { isAuthenticated } from './utils/auth';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/add"
            element={isAuthenticated() ? <AddEmission /> : <Navigate to="/login" />}
          />
          <Route
            path="/dashboard"
            element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/view-feedback" element={<ViewFeedback />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
