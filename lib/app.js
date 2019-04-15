    
const express = require('express');
const app = express();
const tweetsRoutes = require('./routes/tweets');

// Express Middleware
// Between an incoming request
// and an outgoing response

// Body Parser
app.use(express.json());

// if http://localhost:7890/tweets
// go to tweetsRoutes
app.use('/tweets', tweetsRoutes);

module.exports = app;
