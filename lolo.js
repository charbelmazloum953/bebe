const express = require('express');
const cors=require("cors")
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'API is running'
  });
});

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'jiji' },
    { id: 4, name: 'ji' },
  ]);
});

app.post('/api/users', (req, res) => {
  const user = req.body;

  res.status(201).json({
    message: 'User created',
    user
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});