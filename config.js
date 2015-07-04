var config = {
  development: {
    server: {
      port: 3000
    },
    database: {
      url: 'mongodb://localhost/meet-in-the-middle_dev'
    },
    twilio: {
      accountSid: 'ACea5bca179afdb131a7d99301132460df',
      authToken: 'e293ab498a1c26c1b585c0e342eaac62',
      number: '+441296827052'
    }
  },
  testing: {
    server: {
      port: 3001
    },
    database: {
      url: 'mongodb://localhost/meet-in-the-middle_test'
    },
    twilio: {
      accountSid: 'ACea5bca179afdb131a7d99301132460df',
      authToken: 'e293ab498a1c26c1b585c0e342eaac62',
      number: '+441296827052'
    }
  },
  production: {
    server: {
      port: 8080
    },
    database: {
      url: 'mongodb://localhost/meet-in-the-middle'
    },
    twilio: {
      accountSid: 'ACea5bca179afdb131a7d99301132460df',
      authToken: 'e293ab498a1c26c1b585c0e342eaac62',
      number: '+441296827052'
    }
  },
};

module.exports = config[process.env.NODE_ENV || 'development'];
