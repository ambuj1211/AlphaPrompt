# 🚀 AlphaPrompt

<div align="center">

<h3>🌌 Discover, Create & Share AI Prompts</h3>

<p>
A modern AI Prompt Gallery built with <strong>React</strong>, <strong>Node.js</strong>, <strong>Express</strong>, <strong>MongoDB Atlas</strong>, <strong>Firebase Authentication</strong>, and <strong>Cloudinary</strong>.
</p>

<p>
Beautiful Glassmorphism UI • Lightning Fast • Fully Responsive
</p>

![Status](https://img.shields.io/badge/Status-Under%20Development-orange)
![Frontend](https://img.shields.io/badge/Frontend-React-61DAFB)
![Backend](https://img.shields.io/badge/Backend-Express-000000)
![Database](https://img.shields.io/badge/Database-MongoDB-47A248)
![Authentication](https://img.shields.io/badge/Auth-Firebase-FFCA28)
![License](https://img.shields.io/badge/License-MIT-blue)

</div>

---

# 📖 About

**AlphaPrompt** is a modern AI Prompt Gallery that helps users discover, organize, and share high-quality AI prompts and AI-generated images.

Whether you're using **ChatGPT**, **Gemini**, **Claude**, **Midjourney**, **Stable Diffusion**, or other AI tools, AlphaPrompt provides a clean and intuitive platform to explore prompts by category, popularity, and latest uploads.

Designed with a premium **Glassmorphism + Aurora UI**, AlphaPrompt delivers a fast, responsive, and visually engaging experience across desktop, tablet, and mobile devices.

---

# ✨ Features

## 👥 User Features

- 🔍 Search AI prompts
- 🖼 Browse AI-generated images
- ❤️ Like prompts
- 👎 Dislike prompts
- ⭐ Bookmark favorites
- 📤 Share to WhatsApp
- 🔗 Copy prompt to clipboard
- 👀 View count
- 🔥 Trending prompts
- 🆕 Latest uploads
- 🎨 Category filtering
- 👤 Google Authentication
- 📱 Fully responsive design

---

## 👨‍💻 Admin Features

- Secure Admin Dashboard
- Upload AI Images
- Upload AI Prompts
- Edit Prompts
- Delete Prompts
- Category Management
- Image Management
- Dashboard Analytics
- User Management *(Future)*

---

# 🎨 UI Highlights

- 🌌 Aurora Background
- 💎 Glassmorphism Design
- 🌙 Dark Theme
- ⚡ Smooth Animations
- 🎭 Framer Motion
- 📱 Mobile First Design
- 🖼 Pinterest-style Gallery
- ✨ Premium User Experience

---

# 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React, Vite, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| Authentication | Firebase Authentication, JWT |
| Cloud Storage | Cloudinary |
| HTTP Client | Axios |
| Animation | Framer Motion |
| Deployment | Vercel & Render |

---

# 📂 Project Structure

```text
AlphaPrompt/
│
├── client/                     # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── config/
│   │   ├── constants/
│   │   ├── context/
│   │   ├── data/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── styles/
│   │   └── utils/
│   └── package.json
│
├── server/                     # Express Backend
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── uploads/
│   ├── utils/
│   ├── app.js
│   ├── server.js
│   └── package.json
│
├── .gitignore
├── package.json
└── README.md
```

---

# 🚀 Getting Started

## Clone the Repository

```bash
git clone https://github.com/ambuj1211/AlphaPrompt.git
```

```bash
cd AlphaPrompt
```

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## Backend Setup

```bash
cd server
npm install
npm run dev
```

Backend runs at:

```
http://localhost:5000
```

---

# 🔐 Environment Variables

## Backend (`server/.env`)

```env
PORT=5000

MONGODB_URI=

JWT_SECRET=

NODE_ENV=development

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=
```

---

## Frontend (`client/.env`)

```env
VITE_FIREBASE_API_KEY=

VITE_FIREBASE_AUTH_DOMAIN=

VITE_FIREBASE_PROJECT_ID=

VITE_FIREBASE_STORAGE_BUCKET=

VITE_FIREBASE_MESSAGING_SENDER_ID=

VITE_FIREBASE_APP_ID=
```

---

# 📱 Responsive Design

Supports

- 📱 Mobile
- 📱 Tablet
- 💻 Laptop
- 🖥 Desktop

---

# 🚧 Project Status

This project is currently under active development.

### Current Progress

- ✅ Project Structure
- ✅ React + Vite Setup
- ✅ Express Backend
- ✅ MongoDB Atlas Integration
- ✅ Firebase Configuration
- 🚧 Glassmorphism UI
- 🚧 Authentication
- ⏳ Admin Dashboard
- ⏳ Gallery
- ⏳ Deployment

---

# 📋 Development Roadmap

## Phase 1

- [x] Project Setup
- [x] React + Vite
- [x] Express Backend
- [x] MongoDB Atlas
- [x] Firebase Configuration
- [x] Project Architecture

---

## Phase 2

- [ ] Glassmorphism Design System
- [ ] Aurora Background
- [ ] Responsive Navbar
- [ ] Hero Section
- [ ] Home Page
- [ ] Gallery Layout

---

## Phase 3

- [ ] Google Authentication
- [ ] JWT Authentication
- [ ] Protected Routes

---

## Phase 4

- [ ] Admin Dashboard
- [ ] Upload AI Images
- [ ] Upload AI Prompts
- [ ] Cloudinary Integration

---

## Phase 5

- [ ] Search
- [ ] Categories
- [ ] Trending
- [ ] Latest Uploads
- [ ] Prompt Details

---

## Phase 6

- [ ] Like System
- [ ] Dislike System
- [ ] Bookmarks
- [ ] Share Prompt
- [ ] Copy Prompt
- [ ] View Counter

---

## Phase 7

- [ ] Analytics
- [ ] SEO Optimization
- [ ] Google AdSense
- [ ] Deployment
- [ ] Performance Optimization

---

# 🚀 Future Features

- AI Prompt Collections
- User Profiles
- AI Prompt Generator
- Prompt Recommendations
- Prompt Rating System
- Comments
- Notifications
- Progressive Web App (PWA)
- Multi-language Support
- REST API

---

# 📸 Screenshots

Screenshots will be added as development progresses.

---

# 🤝 Contributing

Contributions are welcome!

1. Fork this repository

2. Create a new branch

```bash
git checkout -b feature/your-feature
```

3. Commit your changes

```bash
git commit -m "feat: add your feature"
```

4. Push your branch

```bash
git push origin feature/your-feature
```

5. Open a Pull Request

---

# 📝 Commit Convention

```text
feat:      New feature

fix:       Bug fix

docs:      Documentation

style:     Formatting/UI

refactor:  Code refactoring

test:      Tests

chore:     Maintenance
```

Example:

```text
feat: add glass navbar

fix: responsive sidebar

refactor: optimize API structure
```

---

# 📜 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Author

**Brilliant Ambuj**

- GitHub: https://github.com/ambuj1211
- Repository: https://github.com/ambuj1211/AlphaPrompt

---

<div align="center">

## ⭐ If you like this project, please give it a Star!

Made with ❤️ using React, Node.js, MongoDB, Firebase & Cloudinary.

</div>