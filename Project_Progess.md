# AlphaPrompt - Project Progress

## Project Overview

AlphaPrompt is a modern AI Prompt Marketplace built using React + Vite.

Users can discover, search and save AI prompts.

Only Admin users can upload, edit and manage prompts.

Normal registered users can browse, search, like, bookmark and comment.

Guests can only explore.

---

# Tech Stack

Frontend
- React
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React
- React Router DOM
- Axios
- Firebase Authentication

Backend (Upcoming)
- Node.js
- Express
- MongoDB
- JWT
- Cloudinary

---

# Design Theme

Theme
- Dark
- Glassmorphism
- Indigo + Violet
- Premium SaaS
- Apple / Linear inspired UI
- Fully Responsive

---

# Folder Structure

src/

assets/
    animations/
    fonts/
    icons/
    images/
    logos/

components/

    admin/
    auth/
    gallery/

    home/
        Hero/
        Categories/
        Trending/
        Latest/
        MostLiked/
        AdBanner/

    layout/
        Navbar/
        Footer/

    ui/

        Avatar/
        Badge/
        Button/
        Card/
        EmptyState/
        Input/
        Loader/
        Modal/
        Pagination/
        PromptCard/
        SearchBar/
        Section/
        Skeleton/

pages/

    Home.jsx
    Explore.jsx
    Login.jsx
    Register.jsx
    Profile.jsx
    Dashboard.jsx
    Admin.jsx

routes/
    AppRoutes.jsx

services/

hooks/

utils/

styles/

App.jsx

main.jsx

---

# UI Components Status

Button
✔ Completed

Card
✔ Completed

SearchBar
✔ Completed

Navbar
✔ Completed

Hero
✔ Completed

Categories
✔ Completed

PromptCard
✔ Completed

Input
✔ Completed

Loader
✔ Completed

Skeleton
✔ Completed

Section
✔ Completed

---

# Home Page Status

Navbar
✔

Hero
✔

Categories
✔

Trending
✔

Latest
✔

MostLiked
✔ Completed

Ad Banner
Pending

Footer
Pending

---

# User Roles

Guest

Can

- Browse
- Search
- View Prompt

Cannot

- Like
- Bookmark
- Comment
- Upload

Registered User

Can

- Browse
- Like
- Bookmark
- Comment
- Update Profile

Cannot

- Upload Prompt

Admin

Can

- Upload Prompt
- Edit Prompt
- Delete Prompt
- Manage Categories
- Manage Users

---

# PromptCard

Reusable component.

Used in

- Trending
- Latest
- MostLiked
- Explore
- Search
- Favorites
- Profile
- Dashboard

---

# Design Rules

Always use reusable components.

Never duplicate UI.

Use

Button

Card

PromptCard

Input

Loader

Skeleton

SearchBar

Section

everywhere.

---

# Coding Standards

- Functional Components
- Hooks
- Responsive First
- Clean Folder Structure
- Reusable Components
- No Inline Styles
- Tailwind Utilities
- Framer Motion Animations

---

# Remaining UI Components

Section
EmptyState
Pagination
Badge
Avatar
Modal

---

# Remaining Home Components

MostLiked

FeaturedCreators

AdBanner

Footer

---

# Remaining Pages

Explore

Prompt Details

Login

Register

Forgot Password

Profile

Dashboard

Admin

404

---

# Backend Modules

Authentication

Prompt CRUD

Category CRUD

Bookmark

Like

Comment

Search

Admin Dashboard

Analytics

---

# Future Features

Dark/Light Toggle

Google Login

GitHub Login

Prompt Copy Button

Share Prompt

Infinite Scroll

Prompt Filters

Recently Viewed

AI Recommendation

Notifications

---

# Current Milestone

Design System Completed (85%)

Homepage Completed (80%)

Next Task

Build the Footer component.

After homepage is complete,
move to React Router,
Authentication,
Explore page,
Backend integration.
