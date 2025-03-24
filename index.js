const express = require('express');
const app = express();
const PORT = 4000;

// API route
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from second App',data: [
    {name: 'John Doe', age: 30},
] });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
