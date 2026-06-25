# Trishul Eco-Homestays Direct Booking & AI Review Platform

A direct booking platform and AI-powered guest review sentiment classifier for Trishul Eco-Homestays.

## Tech Stack

### Frontend

* Next.js
* TypeScript
* Tailwind CSS

### Backend

* FastAPI
* Python

### Database

* PostgreSQL (Planned)

### AI

* OpenAI API / Gemini API (Planned)

## Project Structure

```text
TRISHUL-HOMESTAY-BOOKING-AI/
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── .env.example
│
├── frontend/
│   ├── app/
│   ├── components/
│   └── ...
│
└── README.md
```

## How to Run Frontend Locally

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```text
http://localhost:3000
```

## How to Run Backend Locally

```bash
cd backend
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run FastAPI server:

```bash
python -m uvicorn main:app --reload
```

Backend runs at:

```text
http://127.0.0.1:8000
```

API Documentation:

```text
http://127.0.0.1:8000/docs
```

## Available API Endpoints

* GET /api/rooms
* GET /api/rooms/{room_id}
* GET /api/rooms/search?q=
* POST /api/rooms
* PUT /api/rooms/{room_id}
* DELETE /api/rooms/{room_id}
