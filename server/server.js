var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.send('got a request');
});

var port = 3004;
app.listen(port, () => {
  console.log('server listening on port 3004');
});
