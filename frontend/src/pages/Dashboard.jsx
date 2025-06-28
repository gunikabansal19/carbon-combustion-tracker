import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [emissions, setEmissions] = useState([]);

  useEffect(() => {
    const fetchEmissions = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/emissions');
        setEmissions(res.data);
      } catch (err) {
        console.error('❌ Failed to fetch emissions:', err);
      }
    };

    fetchEmissions();
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">📊 Emission Records</h2>
      {emissions.length === 0 ? (
        <p>No emissions found.</p>
      ) : (
        <ul className="space-y-2">
          {emissions.map((e) => (
            <li key={e._id} className="p-4 border rounded bg-gray-50">
              <strong>{e.category}</strong>: {e.amount} kg CO₂ — {new Date(e.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dashboard;
