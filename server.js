var express = require('express');
var app = express();
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
var api = require('./app/routes/api')(router);
var path = require('path');

// Setting the port for the serve
app.set('port', process.env.PORT || 5000);

// Every time a request is made to the server, is going to log it
app.use(morgan('dev'));
// Configurations for body parser
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname+'/public'));
app.use('/api',api);

// Simple get example
app.get('*', (req ,res) => {
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

// Connection to mongoDB database
mongoose.connect('mongodb://localhost:27017/tutorial', (err)=>{
    if(err){
        console.log('Not connected to tutorial database '+err);
    }else{
        console.log('Successfully connected to tutorial database');
    }
});

// Defining the server to listen 
app.listen(app.get('port'), () => {
    console.log("The server is listening on port: "+app.get('port'));
});