import React, { useState } from 'react';
import axios from 'axios';

function Feedback() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:5000/api/feedback',
        { message },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert('✅ Feedback submitted successfully!');
      setMessage('');
    } catch (error) {
      console.error('❌ Feedback Error:', error.response?.data || error.message);
      alert(`❌ Failed to submit feedback: ${error.response?.data?.error || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-6 rounded shadow space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center">📢 Submit Feedback</h2>

        <textarea
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring focus:ring-blue-200"
          rows={5}
          placeholder="Type your feedback here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button
          type="submit"
          className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit Feedback'}
        </button>
      </form>
    </div>
  );
}

export default Feedback;
