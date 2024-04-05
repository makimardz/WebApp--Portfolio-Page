const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

// GET request to render the contact form
app.get('/contact', (req, res) => {
  res.render('contact');
});

// POST request to handle form submission
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Validate form data (you can add your own validation logic here)
  if (!name || !email || !message) {
    return res.status(400).send('All fields are required');
  }

  // Placeholder code for handling form submission (replace with actual logic)
  // For example, you can send an email, store the message in a database, etc.
  
  res.send('Message received! We will get back to you soon.');
});

// Add route for projects page
app.get('/projects', (req, res) => {
  // Sample projects data (replace with actual data)
  const projects = [
    { title: 'Project 1', description: 'Description of Project 1', technologies: ['HTML', 'CSS', 'JavaScript'] },
    { title: 'Project 2', description: 'Description of Project 2', technologies: ['Node.js', 'Express.js', 'EJS'] }
    // Add more projects as needed
  ];

  res.render('projects', { projects });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});