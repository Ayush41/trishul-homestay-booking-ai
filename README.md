# Trishul Eco-Homestays Direct Booking & AI Review Platform

A full-stack web application for Trishul Eco-Homestays that enables users to browse rooms, check availability, book stays, and manage their profiles. The platform is powered by a FastAPI backend, Next.js frontend, and a PostgreSQL database hosted on Supabase.

---

## Features

- Browse available rooms
- Search rooms by name
- Check room availability
- Book rooms online
- User Registration & Login
- User Profile Dashboard
- Room Management (CRUD)
- Contact Form
- Persistent database storage using PostgreSQL (Supabase)
- RESTful API built with FastAPI

---

## Tech Stack

### Frontend

- Next.js
- TypeScript
- Tailwind CSS

### Backend

- FastAPI
- Python
- SQLAlchemy

### Database

- PostgreSQL (Supabase)

### ORM

- Prisma (Database Schema & Migrations)
- SQLAlchemy (FastAPI ORM)

### Authentication

- User Registration
- User Login

### AI (Upcoming)

- AI Review Sentiment Analysis
- OpenAI API / Gemini API

---

## Project Structure

```text
TRISHUL-HOMESTAY-BOOKING-AI/
│
├── backend/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   ├── requirements.txt
│   └── .env.example
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── public/
│   └── ...
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
└── README.md
```

---

## Database

The application uses **Supabase PostgreSQL** as the primary database.

### Entities

- Room
- Booking
- Contact
- User

---

## Backend APIs

### Room APIs

- GET `/api/rooms`
- GET `/api/rooms/{room_id}`
- GET `/api/rooms/search?q=`
- POST `/api/rooms`
- PUT `/api/rooms/{room_id}`
- DELETE `/api/rooms/{room_id}`

### Booking APIs

- POST `/api/check-availability`
- POST `/api/bookings`
- GET `/api/bookings`

### Authentication APIs

- POST `/api/register`
- POST `/api/login`

### Contact APIs

- POST `/api/contact`

---

## Getting Started

### Clone Repository

```bash
git clone <repository-url>
cd trishul-homestay-booking-ai
```

---

## Run Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:3000
```

---

## Run Backend

```bash
cd backend

pip install -r requirements.txt

python -m uvicorn main:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

Swagger Documentation:

```
http://127.0.0.1:8000/docs
```

---

## Database Configuration

Configure your environment variables in `.env`.

Example:

```env
DATABASE_URL=your_database_url
DIRECT_URL=your_direct_database_url
```

---

## Future Enhancements

- AI-powered Guest Review Sentiment Analysis
- Online Payment Integration
- Booking History
- Email Notifications
- Admin Dashboard Analytics
- Room Availability Calendar

---

## Author

**Nupur Dimri**

AI-Assisted Full Stack Web Development Project
