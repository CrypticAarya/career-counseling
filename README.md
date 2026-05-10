# Career Counseling 🎓
### Designing the Future of Higher Education Selection

[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

**Career Counseling** is a premium, full-stack platform designed to bridge the gap between high school graduates and their ideal college campuses. We go beyond brochures to provide students with real, ground-level insights from current students and industry mentors.

---

## ✨ Features

- 🚀 **Personalized Roadmaps**: Visualise your journey from school to your dream career.
- 🏫 **College Insights**: Real data on placements, culture, and campus life for 50+ institutes.
- 🤝 **Mentor Networking**: Book sessions with college alumni and industry experts.
- 🔐 **Secure Auth**: Robust JWT-based authentication for students and mentors.
- 🎨 **Premium UI/UX**: Built with a minimalist aesthetic, featuring glassmorphism and smooth Framer Motion animations.

---

## 📸 Visual Showcase

| Landing Page | Student Dashboard |
|:---:|:---:|
| ![Landing Page](https://via.placeholder.com/600x400/1a472a/ffffff?text=Landing+Page+Mockup) | ![Dashboard](https://via.placeholder.com/600x400/f5f0e6/1a472a?text=Dashboard+Mockup) |

| Career Flow | Mentor Profiles |
|:---:|:---:|
| ![Career Flow](https://via.placeholder.com/600x400/1a472a/ffffff?text=Career+Flow+Mockup) | ![Mentors](https://via.placeholder.com/600x400/f5f0e6/1a472a?text=Mentor+Profiles+Mockup) |

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: React Context API

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose)
- **Security**: Helmet, Express Rate Limit, JWT

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB instance (Local or Atlas)

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd career-counseling
```

### 2. Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` directory:
```env
PORT=5001
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=30d
NODE_ENV=development
```
Start the backend server:
```bash
node server.js
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```
Open [http://localhost:5174](http://localhost:5174) (or the port specified by Vite) in your browser.

---

## 📂 Project Structure

```text
├── backend/            # Express API & MongoDB Models
│   ├── config/         # Database configuration
│   ├── controllers/    # Request handlers
│   ├── models/         # Database schemas
│   ├── routes/         # API endpoints
│   └── server.js       # Entry point
├── frontend/           # React + Vite application
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── hooks/      # Custom React hooks
│   │   └── pages/      # Page components
└── docs/               # Strategy & roadmap
```

---

## 📈 MVP Progress

- [x] Premium Landing Page
- [x] Secure Authentication Flow
- [x] MongoDB Integration
- [x] Dashboard Stubbing
- [ ] Real-time Mentor Booking (Upcoming)
- [ ] AI-Powered Career Suggestions (Upcoming)

---

**Built with passion for the students of tomorrow.** 🚀
