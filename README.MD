# BookstoreMERN

A full‑stack Bookstore application built using the MERN stack (MongoDB, Express, React, Node.js).

## 🧾 Table of Contents

- [About](#about)  
- [Features](#features)  
- [Tech Stack](#tech‑stack)  
- [Getting Started](#getting‑started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
- [Usage](#usage)  
- [Folder Structure](#folder‑structure)  
- [Contributing](#contributing)  
- [License](#license)  

## 📖 About

This project is a Bookstore application where users can browse, add, edit, and delete books. It features separate backend and frontend directories, showcasing how to structure and deploy a MERN stack app.

## ✅ Features

- Browse a list of books  
- View details of each book  
- Add a new book  
- Edit existing book details  
- Delete books  
- User interface built using React  
- RESTful API backend using Node.js + Express  
- Data stored in MongoDB  

## 🛠 Tech Stack

| Layer       | Technology       |
|-------------|------------------|
| Database    | MongoDB          |
| Backend     | Node.js, Express |
| Frontend    | React            |
| Styling     | CSS / (optional) |

## 🚀 Getting Started

### Prerequisites

Before you begin, make sure you have:

- Node.js (v14+ recommended)  
- npm or yarn  
- MongoDB running locally or a MongoDB Atlas connection URL  

### Installation

1. Clone the repo  
   ```bash
   git clone https://github.com/Divya2k5/BookstoreMERN.git
   cd BookstoreMERN

2. Setup Backend
cd backend
npm install
# Create a .env file (if required) and set your MongoDB URI, e.g.:
# MONGODB_URI=<your_mongodb_uri>
npm start

3. Setup Frontend
cd ../frontend
npm install
npm start

4. Access the app
Open your browser and navigate to: http://localhost:3000 (or relevant port)

🎮 Usage

Use the UI to browse available books.

Click “Add Book” to create a new book entry.

Use “Edit” to update book details.

Use “Delete” to remove a book.

All actions are persisted in the MongoDB database via the backend API.

FOLDER STRUCTURE 
BookstoreMERN/
│
├─ backend/            # Express server, API routes, models
│   ├─ models/
│   ├─ routes/
│   ├─ controllers/
│   ├─ .env             # environment variables (e.g. MongoDB URI)
│   └─ server.js
│
├─ frontend/           # React application
│   ├─ src/
│   ├─ public/
│   └─ package.json
│
└─ .gitignore
🤝 Contributing

Contributions are welcome!

Fork the repository

Create a new branch (git checkout -b feature/YourFeature)

Commit your changes (git commit -m 'Add ...')

Push to the branch (git push origin feature/YourFeature)

Open a pull request and describe your changes

Please make sure your code adheres to existing style and includes relevant tests where applicable.

📄 License

This project is open source and available under the MIT License
.
Feel free to use, modify, and distribute.

Thank you for checking out BookstoreMERN! Happy coding 😊