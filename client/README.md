# 🏠 Bhairavi Home Stay - Full-stack Website

A responsive, SEO-optimized website for Bhairavi Home Stay near Isha Yoga Center, Coimbatore. Designed with a traditional South Indian (Tamil heritage) aesthetic.

## ✨ Features
- **Traditional UI**: Red brick vibes, Diya glows, and Kolam patterns.
- **Responsive**: Fully optimized for mobile and desktop.
- **Interactive**: Smooth scrolling and contact form with WhatsApp integration.
- **Full-stack**: React + Vite frontend, Flask REST API backend, and MongoDB Atlas database.

## 🛠️ Tech Stack
- **Frontend**: React, Tailwind CSS, Framer Motion, Axios, Lucide Icons.
- **Backend**: Python Flask, Pymongo, Python-Dotenv.
- **Database**: MongoDB Atlas (or local MongoDB).

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18+)
- Python (v3.9+)
- MongoDB Atlas Account (or local MongoDB instance)

### 2. Backend Setup
1.  Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
3.  Configure environment variables in `.env`:
    ```env
    MONGO_URI=your_mongodb_connection_string
    ```
4.  Run the Flask server:
    ```bash
    python app.py
    ```
    The API will be available at `http://localhost:5000`.

### 3. Frontend Setup
1.  Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the Vite development server:
    ```bash
    npm run dev
    ```
    The website will be available at `http://localhost:5173`.

### 4. Direct Launch (Windows Only)
Run the provided PowerShell script to launch both servers in separate windows:
```powershell
./run.ps1
```

## 🎨 Design Colors
- **Terracotta**: #8B2E1E
- **Sand**: #F5E6C8
- **Dark Brown**: #3E2723
- **Gold**: #C89B3C

---
**Namaskaram!** Experience the spiritual energy of Isha with a peaceful stay.
