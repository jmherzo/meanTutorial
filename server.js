var express = require('express');
var app = express();

// Setting the port for the serve
app.set('port', process.env.PORT || 5000);

// Simple get example
app.get('/', (req ,res) => {
    res.send('Hello world');
});

// Defining the server to listen 
app.listen(app.get('port'), () => {
    console.log("The server is listening on port: "+app.get('port'));
});