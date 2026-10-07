// Import Express framework
const express = require('express');
const app = express();
const port = 8080;

// Main route - returns a greeting message
app.get('/', (req, res) => {
  res.send('Hello from my CI/CD pipeline!');
});

// Health check endpoint for monitoring
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Start the server on port 8080 (Elastic Beanstalk's default for Node.js)
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});