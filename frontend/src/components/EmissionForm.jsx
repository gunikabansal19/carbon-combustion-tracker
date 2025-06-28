
// ✅ src/components/EmissionForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

function EmissionForm() {
  const [type, setType] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/emissions', { type, amount });
      setType('');
      setAmount('');
      alert('Emission added!');
    } catch (err) {
      console.error(err);
      alert('Failed to add emission');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6 space-y-4">
      <input
        type="text"
        placeholder="Emission Type (e.g. Diesel)"
        value={type}
        onChange={(e) => setType(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Amount (kg CO₂)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Add Emission
      </button>
    </form>
  );
}

export default EmissionForm;
