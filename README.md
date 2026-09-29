# 🎵 VibeStream – Full-Stack Music Streaming Platform

VibeStream is a modern, full-stack music streaming application built with the **MERN stack**. It allows users to stream music, create custom playlists and albums, and provides a dedicated artist dashboard for managing music uploads. The application features secure authentication, responsive design, and a seamless audio playback experience.

---

# ✨ Features

## 👤 Authentication & Authorization

* Secure user authentication using **JWT**
* Password encryption with **bcryptjs**
* Role-based access control:

  * **Listeners** – Stream and discover music
  * **Artists** – Upload songs and manage albums
* Protected API routes using custom Express middleware

---

## 🎧 Listener Experience

* Stream music with a persistent audio player
* Browse songs and artist-created albums
* Search tracks and albums in real time
* Responsive interface optimized for desktop and mobile
* Volume, mute, and playback preferences saved using `localStorage`

---

## 🎙️ Artist Studio

* Upload audio files (MP3, WAV, M4A)
* Secure media storage using **ImageKit**
* Create and manage custom albums
* Edit and delete uploaded songs
* View and organize personal music library

---

## ⚙️ Technical Highlights

* HTML5 Audio API with global playback state using React Context
* RESTful API architecture with Express.js
* MongoDB database using Mongoose ODM
* File uploads handled with Multer
* Vite development proxy for seamless frontend-backend communication
* Clean component-based React architecture
* Fully responsive UI built with Tailwind CSS

---

# 📁 Project Structure

```text
VibeStream/
│
├── backend/
│   ├── src/
│   │   ├── controllers/      # Business logic
│   │   ├── db/               # MongoDB connection
│   │   ├── middlewares/      # Authentication & authorization
│   │   ├── models/           # Mongoose schemas
│   │   ├── routes/           # API endpoints
│   │   └── services/         # ImageKit and helper services
│   │
│   ├── .env
│   └── server.js
│
└── frontend/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   │   ├── auth/
    │   │   ├── dashboard/
    │   │   ├── modals/
    │   │   └── player/
    │   ├── context/
    │   ├── index.css
    │   └── main.jsx
```

---

# 🚀 Getting Started

## Prerequisites

* Node.js (v18 or later)
* MongoDB Atlas or Local MongoDB
* ImageKit Account

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory.

```env
PORT=3000
MONGO_URI=your_mongodb_connection_uri
JWT_SECRET=your_jwt_secret
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

Start the backend server.

```bash
npm run dev
```

The backend runs on:

```text
http://localhost:3000
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on:

```text
http://localhost:5173
```

API requests to `/api/*` are automatically proxied to the backend during development.

---

# 🛠️ Tech Stack

## Frontend

* React 18
* Vite
* Tailwind CSS
* React Context API
* Lucide React
* HTML5 Audio API

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs
* Multer
* ImageKit SDK

---

# 🔒 Security

* JWT-based authentication
* Password hashing using bcryptjs
* Protected API routes
* Role-based authorization
* Environment variables for sensitive credentials

---

# 📌 Future Improvements

* Playlist support
* Song likes and favorites
* Recently played history
* Follow artists
* Music recommendations
* Comments and reviews
* Real-time notifications
* Admin dashboard
* Audio waveform visualization
* Dark and Light themes

---




