'use strict';
var config = {
  ENGINE: 'express'
};
module.exports = function (req, res, next) {
  if (typeof req.path !== 'string' && req.route && typeof req.route.path === 'string') {
    config.ENGINE = 'restify';
  }
  var path = config.ENGINE === 'express' ? req.path : req.route.path;
  console.log(path);

  if (config.ENGINE === 'restify') {
    return next(req, res, next);
  }
  next();
};
