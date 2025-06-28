import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EmissionList() {
  const [emissions, setEmissions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/emissions')
      .then((res) => setEmissions(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <h2 className="text-xl font-semibold mb-4">Emission Records</h2>
      <ul className="space-y-2">
        {emissions.length === 0 ? (
          <p>No emission records found.</p>
        ) : (
          emissions.map((e) => (
            <li key={e._id} className="border p-3 rounded bg-white shadow">
              <strong>{e.source || e.type}</strong>: {e.amount} kg CO₂ on {new Date(e.date).toLocaleDateString()}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default EmissionList;
