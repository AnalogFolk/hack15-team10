var sms = require('../models/sms'),
    extend = require('util')._extend;
 

exports.getRoom = function (req, res) {
  // res.send('room - ' + req.params.roomRef);
  var returnData = {};
  extend(returnData, {title: "Welcome to your room"});
  // extend(returnData, {message: "Invite your friends!"});
  // extend(returnData, {hideError: true});
  // console.log('getInvite');
  res.render('room', returnData);
};