'use strict';
var express = require('express');
var auth = require('../lib/awth');

var app = express();

app.use(auth);

app.get('/test', function (req, res, next) {
  res.end('111');
});

app.listen(3001, function () {
  console.log('Listen at port 3001');
});
