# email-project
README for Backend (email-ingestion)
 Backend
This is the backend for the Email Management System. It handles email storage, retrieval, and deletion using Node.js, Express, and Prisma with SQLite.

Setup & Run Instructions
1. Clone the Repository

git clone https://github.com/keshavnagar/email-ingestion

cd email-ingestion

2. Install Dependencies

npm install

3. Setup the Database

npx prisma migrate dev --name init

4. Start the Server

npm start

The backend will run on http://localhost:3000

API Endpoints

Method	Endpoint	Description

GET	/emails	Fetch all emails

POST	/emails	Add a new email

DELETE	/emails/:id	Delete an email by ID

Environment Variables (.env file required)

Create a .env file in the root directory and add:

DATABASE_URL="file:./dev.db"

for Frontend (email-frontend)

Email Management System - Frontend

This is the frontend for the Email Management System, built using React (Vite).

Setup & Run Instructions
1. Clone the Repository

git clone https://github.com/keshavnagar/email-ingestion

cd email-frontend

2. Install Dependencies

npm install

3. Start the Frontend Server

npm run dev

The frontend will be available at http://localhost:5173

Features
Add a new email
View all emails
Delete emails
Make sure the backend is running before using the frontend.
