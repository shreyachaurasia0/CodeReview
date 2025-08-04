# Code Review Website

# Code Review Website

A web application that allows users to input code and receive AI-powered code reviews, suggestions, and improvements. The platform features a live code editor with syntax highlighting and displays AI-generated feedback in real time. Built with React for the frontend and Node.js/Express for the backend, it leverages Google Gemini AI for advanced code analysis and suggestions. The UI is modern and responsive, making it easy for developers to enhance their code quality quickly and efficiently.

## Features

- Live code editor with syntax highlighting
- AI-generated code reviews and suggestions
- Markdown rendering for review output
- Modern, responsive UI

## Tech Stack

- **Frontend:** React, Vite, PrismJS, react-simple-code-editor, react-markdown, axios
- **Backend:** Node.js, Express, @google/generative-ai, dotenv, cors

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Setup

#### 1. Clone the repository

```sh
git clone <repo-url>
cd CodeReview
```

#### 2. Install dependencies

**Backend:**

```sh
cd Backend
npm install
```

**Frontend:**

```sh
cd ../Frontend
npm install
```

#### 3. Configure Environment Variables

In `Backend/.env`, set your Google Gemini API key:

```
GOOGLE_GEMINI_KEY=your_google_gemini_api_key
```

#### 4. Run the Application

**Start the backend server:**

```sh
cd Backend
node server.js
```

**Start the frontend development server:**

```sh
cd ../Frontend
npm run dev
```

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend API: [http://localhost:3000](http://localhost:3000)

## Usage

1. Enter your code in the editor on the left.
2. Click the **Review** button.
3. View the AI-generated review and suggestions on the right.

## Project Structure

```
Backend/
  ├── .env
  ├── package.json
  ├── server.js
  └── src/
      ├── app.js
      ├── controllers/
      ├── routes/
      └── services/
Frontend/
  ├── package.json
  ├── vite.config.js
  ├── index.html
  └── src/
      ├── App.jsx
      ├── main.jsx
      ├── App.css
      └── ...
```

## License
