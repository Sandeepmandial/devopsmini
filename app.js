// Import express module
const express = require('express');

// Create an express app
const app = express();

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello from devops CI/CD Pipeline!');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('App running on port 3000');
});
