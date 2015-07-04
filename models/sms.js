var config          = require('../config'),
    http            = require('http');

// http://telegraph-content-api.appspot.com/article?url=/culture/glastonbury/11585252/The-Who-to-close-Glastonbury-2015.html

exports.sendInvite = function(recipientNum, senderName, roomRef, callback) {
  console.log(config);
  var client = require('twilio')(config.twilio.accountSid, config.twilio.authToken);
  console.log('sendInvite via SMS');
  // console.log(client);
  // callback({success: "true"});

  client.messages.create({ 
    to: recipientNum, 
    from: config.twilio.number, 
    body: "Lets meet, join the MiddleMeet room to find out where http://www.google.co.uk",
  }, function(err, message) { 
    if(err) { 
      return callback({success:false}); 
    }

    return callback({success: true})
  });
};