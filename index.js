const express = require('express');

// Create first app on port 3000
const app1 = express();
const PORT1 = 3000;

app1.get('/api/message', (req, res) => {
  res.json({ 
    message: 'Hello from the Node API on port 3000!',
    data: [
      { name: 'John Doe', age: 30 },
      { name: 'Jane Doe', age: 25 },
      { name: 'Jim Doe', age: 35 }
    ]
  });
});

app1.listen(PORT1, () => {
  console.log(`Server 1 is running on http://localhost:${PORT1}`);
});

// Create second app on port 4000
const app2 = express();
const PORT2 = 4000;

app2.get('/api/message', (req, res) => {
  res.json({ 
    message: 'Hello from the Node API on port 4000!',
    data: [
      { name: 'Alice', age: 28 },
      { name: 'Bob', age: 32 },
      { name: 'Charlie', age: 40 }
    ]
  });
});

app2.listen(PORT2, () => {
  console.log(`Server 2 is running on http://localhost:${PORT2}`);
});
