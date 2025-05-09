# Jobly (Frontend)

A job board application built using React and a provided `Express.js` *backend API*. Users can browse companies and job listings, apply for jobs, and manage their profiles through a secure, responsive interface.

> 📝 This repository contains the **frontend code only**. The backend (Express.js + PostgreSQL) was provided as starter code and is available separately.

---

## 🌐 Live Demo

Check out the deployed application here:  
[Live Demo](https://react-jobly-frontend-8y5g.onrender.com/)

---

## 🌟 General Features

- Frontend-focused React application
- Integration with a prebuilt RESTful API
- Secure user authentication using JWT
- Token handling with `localStorage`
- Job and company data fetching via Axios
- Protected routes, conditional rendering, and user context
- Profile editing and job application tracking
- Responsive layout using custom CSS and Bootstrap

---

## 🧱 Tech Stack

- **Frontend**: React (with Vite), React Router, Axios, Context API, Bootstrap, CSS
- **Authentication**: JWT (token-based)
- **Backend API**: Express.js (provided), PostgreSQL

---

## 📁 Project Structure

```
src/
├── components/             # All major UI components (CompanyList, JobCard, etc.)
├── hooks/
│   └── useLocalStorage.js  # Custom hook to persist JWT/token
├── api.js                  # Axios wrapper for backend requests
├── App.jsx                 # Main app component and route layout
├── UserContext.jsx         # React Context for user/auth state
├── Routes.jsx              # Centralized routing logic
├── index.css               # Global styles
├── App.css                 # Component-level styling
├── main.jsx                # Entry point

```

---

## 🚀 Getting Started

### 1. Clone the repo

```git clone https://github.com/Obersan6/react-jobly-frontend
cd jobly-frontend
```

### 2. Install dependencies

```
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root with:

```
VITE_BASE_URL=http://localhost:3001
```

*(Adjust the URL to match your backend deployment if needed)*

### 4. Start the development server (Vite)

```bash
npm run dev
```

 ⚡️ *This project uses [Vite](https://vitejs.dev/) for fast build performance and hot module replacement. No global installation is needed if you're using `npm run dev`.*

---

## 🔐 Authentication

- **JWT tokens** are handled on login/signup and stored securely in `localStorage`
- Auth state is managed globally using **React Context** (`UserContext.jsx`)
- Protected routes redirect unauthenticated users to `login/signup`.

## 📦 Backend (Provided)

This app uses a prebuilt `Express.js + PostgreSQL API backend`.

You can find or clone the backend repo here ([insert backend repo link if public](https://github.com/Obersan6/react-jobly-backend)).





