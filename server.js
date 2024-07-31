const dotenv = require('dotenv');
dotenv.config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session');
const path = require('path');

// Require custom middleware
const isSignedIn = require('./middleware/is-signed-in.js');
const passUserToView = require('./middleware/pass-user-to-view.js');

// Require controllers
const authController = require('./controllers/auth.js');
const applicationsController = require('./controllers/applications.js');

// Initialize Express app
const app = express();

// Set port from environment variables or default to 3000
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

// Middleware setup
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies
app.use(methodOverride('_method')); // Support HTTP verbs like PUT and DELETE
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

app.use(
  session({
    secret: process.env.SESSION_SECRET, // Secret for signing the session ID cookie
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production' } // Set to true if using HTTPS in production
  })
);

app.use(passUserToView); // Add user information to views

// Route handlers
app.get('/', (req, res) => {
  if (req.session.user) {
    // Redirect signed-in users to their applications
    res.redirect(`/users/${req.session.user._id}/applications`);
  } else {
    // Render homepage for users not signed in
    res.render('index.ejs');
  }
});

app.use('/auth', authController); // Authentication routes
app.use(isSignedIn); // Ensure user is signed in for the following routes
app.use('/users/:userId/applications', applicationsController); // User applications routes

// Global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

// Start the server
app.listen(port, () => {
  console.log(`The Express app is ready on port ${port}!`);
});