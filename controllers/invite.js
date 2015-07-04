/**
 * do something with the user model
 * var User = require('../models/user');
 */

exports.getInvite = function (req, res) {
  res.render('index', {
    title: 'getInvite'
  });
};

exports.postInvite = function (req, res) {
  res.send('posted');
};