require('dotenv').config();
const path = require('path');
const express = require('express');
const app = require('./src/app');

// Serve frontend static files
const frontendPath = path.join(__dirname, '../Frontend/dist');
app.use(express.static(frontendPath));

// Fallback for SPA (React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/');
});