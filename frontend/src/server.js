const express = require('express');
const app = express();
const cors = require('cors');

// Use Node.js body parsing middleware
app.use(express.json());
app.use(cors()); // this enables all CORS requests. Configure as needed.

// Mock data for courses
let courses = [
  { id: 1, title: 'Swimming 101', subtitle: 'How to swim', value: 1 },
  { id: 2, title: 'Swimming 201', subtitle: 'A second swim class', value: 2 },
  // Add more course objects here
];

// Routes for your API
app.get('/api/courses', (req, res) => {
  res.json(courses);
});

app.post('/api/courses', (req, res) => {
  const newCourse = {
    id: courses.length + 1, // This should be replaced with a database-generated ID
    title: req.body.title,
    subtitle: req.body.subtitle,
  };
  courses.push(newCourse);
  res.status(201).json(newCourse);
});

// UPDATE: Update a course by ID
app.put('/api/courses/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const courseIndex = courses.findIndex(c => c.id === id);
  if (courseIndex === -1) return res.status(404).send('Course not found.');

  const updatedCourse = { ...courses[courseIndex], ...req.body };
  courses[courseIndex] = updatedCourse;
  res.json(updatedCourse);
});

// DELETE: Delete a course by ID
app.delete('/api/courses/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const courseIndex = courses.findIndex(c => c.id === id);
  if (courseIndex === -1) return res.status(404).send('Course not found.');

  courses = courses.filter(c => c.id !== id);
  res.status(204).send();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
