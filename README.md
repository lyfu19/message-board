# 📝 Mini Message Board

A simple message board web app built with **Node.js**, **Express**, and **EJS**.  
Users can view a list of messages and submit a new one through a form.

## 🚀 Features

- View a list of existing messages
- Add a new message via a form
- Server-side rendering with EJS templates
- Lightweight Express setup for learning purposes

## 📂 Project Structure

```
message-board/
├── app.js               # Main application file
├── routes/
│   └── index.js         # Route definitions
├── views/               # EJS templates
│   ├── index.ejs
│   ├── form.ejs
│   └── message.ejs
├── package.json
```

## 🛠️ Technologies

- Node.js
- Express
- EJS (Embedded JavaScript Templates)

## 📦 Installation & Usage

```bash
# 1. Clone the repo
git clone https://github.com/your-username/message-board.git
cd message-board

# 2. Install dependencies
npm install

# 3. Run the server
npm start

# 4. Open in browser
http://localhost:3000
```

## 📌 Notes

This is a basic educational project with in-memory storage.  
All messages will be lost when the server restarts.
