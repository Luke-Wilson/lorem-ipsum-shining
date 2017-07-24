var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

// Set path to static files and node modules
app.use(express.static(path.join(__dirname, '../client')));
app.use('/scripts', express.static(path.join(__dirname, '../node_modules')));

app.use(bodyParser.json());

//Test route
app.get('*', (req, res) => {
  res.send('got a request');
});

var port = process.env.PORT || 3004;
app.listen(port, () => {
  console.log('server listening on port', port);
});
