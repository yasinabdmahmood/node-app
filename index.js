const express = require('express');
const app = express();
const PORT = 3000;

// API route
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the Node API!',data: {name: 'John Doe', age: 30} });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
