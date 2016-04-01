var http = require('http');
var https = require('https');
var fs = require('fs');
var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
var public_dir = __dirname + '/public';
app.use(express.static(public_dir));

app.get('/:filename', function(req, res) {
  res.render(req.params.filename);
});

app.get('/', function(req, res) {
  res.render('index');
});

var httpServer = http.createServer(app);
httpServer.listen(3000);
