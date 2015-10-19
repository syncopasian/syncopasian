var http = require('http');
var https = require('https');
var fs = require('fs');
var express = require('express');
var app = express();

var public_dir = __dirname + '/public';
app.use(express.static(public_dir));

var credentials = {
    key: fs.readFileSync('auth/server.key'),
    cert: fs.readFileSync('auth/server.crt')
};

var httpsServer = https.createServer(credentials, app);

var httpServer = http.createServer(function(req, res) {
    res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
    res.end();
});

httpServer.listen(8080);
httpsServer.listen(8443);
//app.listen(process.env.OPENSHIFT_NODEJS_PORT || 8080,
//  process.env.OPENSHIFT_NODEJS_IP);
