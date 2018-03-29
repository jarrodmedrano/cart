const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config/database');

//connect to the db
mongoose.connect(config.database);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
   console.log('Connected to mongodb');
});

//Init app
const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Set public folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.send('working');
});

//Start the server
var port = 3000;
app.listen(port, function() {
    console.log('Server started on port ' + port);
});

