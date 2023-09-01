const path = require('path')

// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const connectDB = require('./config/database')

// Create an instance of Express
const app = express();
connectDB()

// Set EJS as the template engine
app.set('view engine', 'ejs')
app.set('views', 'views')


// Set up a static route for serving static files (e.g., CSS, images)
app.use(express.static(path.join(__dirname, 'assets')))

// Define a GET route that renders an EJS file
app.get('/', (req, res) => {
    try {
        res.render('index')
    } catch (err) {
        console.log(err)
    }
});

// Start the Express server on port 3000 (you can change this port)
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
