// src/index.js
const express = require("express");
const app = express();
const path = require("path");
const jobs=require('./jobs');


console.log(jobs)

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));  // Make sure views folder is here

// Middleware to serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));


// Define a route
app.get('/', function(req, res) {
  res.render('index.ejs');  // Render an EJS view (index.ejs should be in the 'views' folder)
});

// app.get('/index',function(req,res){
//     res.render("index.ejs");
// })


// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
