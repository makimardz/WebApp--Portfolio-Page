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

  
  
  res.send('Message received! We will get back to you soon.');
});

// Add route for projects page
app.get('/projects', (req, res) => {
  const projects = [
    { 
      title: 'Project 1', 
      description: 'Description of Project 1', 
      imageUrl: '/project1.jpg', // Correct path relative to the 'public' folder
      technologies: ['HTML', 'CSS', 'JavaScript'] 
    },
    { 
      title: 'Project 2', 
      description: 'Description of Project 2', 
      imageUrl: '/project2.jpg', // Correct path relative to the 'public' folder
      technologies: ['Node.js', 'Express.js', 'EJS'] 
    },
    { 
      title: 'Project 3', 
      description: 'Description of Project 3', 
      imageUrl: '/project3.jpg', // Correct path relative to the 'public' folder
      technologies: ['Node.js', 'Express.js', 'EJS'] 
    }
  ];

  res.render('projects', { projects }); // Ensure 'projects' array is passed to the template
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});