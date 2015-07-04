/**
 * do something with the user model
 * var User = require('../models/user');
 */

exports.getInvite = function (req, res) {
  res.render('invite', {
    title: 'Invite your friends!'
  });
};

exports.postInvite = function (req, res) {
  res.send('posted');
};