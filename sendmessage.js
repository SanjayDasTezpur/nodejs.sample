// send text message from node js / javascript

var twilio = require('twilio');

// Find your account sid and auth token in your Twilio account Console.
var client = new twilio('AC5e9fe319e2bbe55e1eae001a5b55cc6a', '40caac1214ca10f2af0953bcc20f2ab5');

// Send the text message.
client.messages.create({
  to: '+918876225655',
  from: 'YOUR_TWILIO_NUMBER',
  body: 'Hello Mona ! Never Challange sanjay , He has done this using javascript'
});