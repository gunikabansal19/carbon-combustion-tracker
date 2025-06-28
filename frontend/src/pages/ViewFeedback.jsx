import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ViewFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/feedback'); // ✅ Ensure backend route is mounted
        setFeedbacks(res.data);
      } catch (err) {
        console.error('❌ Feedback Fetch Error:', err);
        setError('❌ Failed to fetch feedback');
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-green-700">User Feedback</h2>

      {loading ? (
        <p className="text-blue-500">Loading feedback...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : feedbacks.length === 0 ? (
        <p className="text-gray-500">No feedback available yet.</p>
      ) : (
        <ul className="space-y-4">
          {feedbacks.map((fb, index) => (
            <li key={index} className="border p-4 rounded bg-gray-50">
              <p className="font-semibold text-green-700">{fb.username || 'Anonymous'}</p>
              <p className="text-gray-800 mt-1">{fb.message}</p>
              <p className="text-sm text-gray-500 mt-2">{new Date(fb.date).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ViewFeedback;
