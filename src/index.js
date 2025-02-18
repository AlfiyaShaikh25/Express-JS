// Import required modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require('path');

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to parse URL-encoded data (for forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like images, CSS, JS) from the 'public' directory
app.use(express.static("public"));

// Define routes


app.get('/hello', function(req, res) {
    res.send("hello world..!");
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
