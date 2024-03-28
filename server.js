const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/result', (req, res) => {
  const { name } = req.body;
  res.render('result', { name });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});