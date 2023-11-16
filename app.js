// const express = require('express');
const express = require('express')
const app = express();
const PORT = 3000;

// Custom middleware to verify the time of the request
app.use( (req, res, next) => {
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const hourOfDay = now.getHours();

  // Check if it's a working day (Monday to Friday) and the time is between 9 and 17
  if (dayOfWeek >= 1 && dayOfWeek <= 5 && hourOfDay >= 9 && hourOfDay < 17) {
    next(); // Continue to the next middleware or route handler
  } else {
    res.send('This web application is only available during working hours (Monday to Friday, 9 to 17).');
  }
});


// Use EJS as the template engine
app.set('view engine', 'ejs');

// Set up static files (CSS, images, etc.)
app.use(express.static('public'));

// Use the custom middleware for all routes

// Define routes
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/services', (req, res) => {
  res.render('services');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:3000`);
});
