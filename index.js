var express = require('express');
var app = express();

var public_dir = __dirname + '/public';

app.use(express.static(public_dir));

app.listen(process.env.OPENSHIFT_NODEJS_PORT || 8080,
  process.env.OPENSHIFT_NODEJS_IP);