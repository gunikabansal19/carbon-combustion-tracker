# 🌿 Carbon Combustion Tracker

A full-stack MERN application that helps users track, visualize, and manage carbon emissions caused by various activities like fuel usage, transportation, and industrial operations.

---

## 🚀 Features

- 🔐 User Authentication (Login / Signup)
- ➕ Add Carbon Emission Records
- 📊 View Emissions in a Dashboard
- 💬 Submit & View User Feedback
- 🔐 Protected Routes (e.g., Add & Dashboard)
- 🌙 Dark Mode (Optional)
- 🧪 Feedback System with Storage
- 🧭 Not Found (404) Page Routing

---

## 🧱 Tech Stack

**Frontend:**
- React.js (with Vite)
- TailwindCSS
- Axios
- React Router DOM

**Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Tokens (JWT)
- bcryptjs

---

## 📂 Project Structure

carbon-combustion-tracker/
├── backend/
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ ├── middleware/
│ ├── .env
│ └── server.js
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ ├── utils/
│ │ └── App.jsx
│ └── public/
│ └── index.html
└── README.md

// Example
{
  "username": "testuser",
  "password": "123456"
}

How to Run Locally
1. Clone the repository:
bash
Copy code
git clone https://github.com/gunikabansal19/carbon-combustion-tracker.git
cd carbon-combustion-tracker
2. Backend Setup:
bash
Copy code
cd backend
npm install
npm start
3. Frontend Setup:
bash
Copy code
cd ../frontend
npm install
npm run dev

📦 API Endpoints
Auth
POST /api/auth/register – Register a user

POST /api/auth/login – Login a user

Emissions
POST /api/emissions – Add a record

GET /api/emissions – Get all records

Feedback
POST /api/feedback – Submit feedback

GET /api/feedback – View feedback

🌐 Deployment (Coming Soon)
Frontend: Vercel / Netlify

Backend: Render / Railway / Cyclic

👩‍💻 Author
Gunika Bansal
📧 gunikabansal19