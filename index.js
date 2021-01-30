// index.js

// import express
let express = require('express');

// import body parser
let bodyParser = require('body-parser');

// import mongoose
let mongoose = require("mongoose");

// configure bodyparser to handle the post requsts
app.use(bodyParser.urlencoded({ extended: true }));

// connect to mongoose
const dbPath = 'mongodb://localhost/firstrest';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);

mongo.then(() => {
  console.log('connected');
}, error => {
  console.log(error, 'error');
})

// start app
let app = express();
	
// asign port
var port = process.env.port || 8080

// welcome message
app.get('/', (req, res) => res.send('Welcome to express'));

// launch app to the specified port
app.listen(port, function() {
  console.log("Running FirstRest on Port " + port);
})

// Import router
let apiRoutes = require("./routes")

// use API routes in the app
app.use('/api', apiRoutes)
