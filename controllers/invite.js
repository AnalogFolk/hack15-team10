var sms = require('../models/sms'),
    extend = require('util')._extend;
 

exports.getInvite = function (req, res) {
  var returnData = {};
  extend(returnData, {title: "Invite your friends!"});
  extend(returnData, {message: "Invite your friends!"});
  extend(returnData, {hideError: true});
  console.log('getInvite');
  res.render('invite', returnData);
};

exports.postInvite = function (req, res) {
  var returnData = {};
  returnData.title = "Invite your friends!";
  var roomRef = "277b36f";
  console.log('parameters');
  console.log(req.body.mobile);

  sms.sendInvite(req.body.mobile, "Jolyon", roomRef, function(result){
    console.log('we sent the sms');
    console.log(result);
    console.log(result.success)
    // console.log((result.success === true));
    if(result.success === true) {
      extend(returnData, {roomRef: roomRef});
    } else {
      extend(returnData, {hideError: false});
    }

    console.log('returnData');
    console.log(returnData);
    // ^(07[\d]{8,12}|447[\d]{7,11})$

    // console.log(req.params.mobile);

    // res.send('posted');
    res.render('invite', returnData);
  });
};