fs = require('fs');


var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost');
client.on('connect', function() {
client.subscribe('broj')
});
console.log('Subsciber #1 is online!');
console.log('Receiving message...');
client.on('message', function(topic, message) {
context = message.toString();
fs.appendFile('brojevi.txt', context, function (err) {
    if
     (err) 
    return 
  });
});