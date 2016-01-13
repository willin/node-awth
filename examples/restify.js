'use strict';
var restify = require('restify');
var auth = require('../lib/awth');

var app = restify.createServer();

app.use(auth);

app.get('/test', function (req, res, next) {
  res.end('111');
});

app.listen(3002, function () {
  console.log('Listen at port 3002');
});
