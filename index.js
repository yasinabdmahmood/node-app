const express = require('express');
const app = express();
const PORT = 3000;

// API route
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the Node API!',data: [
    {name: 'John Doe', age: 30},
    {name: 'Jane Doe', age: 25},
    {name: 'Jim Doe', age: 35},
] });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
