const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

app.use(express.json());

// In-memory storage for todos
let todos = [];

// Serve frontend folder
app.use(express.static(path.join(__dirname, '../frontend')));

// API routes
app.get('/api', (req, res) => {
  res.send('Welcome to To-Do API! Visit /api/todos to see tasks.');
});

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.post('/api/todos', (req, res) => {
  const { task } = req.body;
  if (!task) return res.status(400).json({ error: 'Task is required' });
  const todo = { id: todos.length + 1, task };
  todos.push(todo);
  res.status(201).json(todo);
});

// Fallback route to frontend for other paths
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});