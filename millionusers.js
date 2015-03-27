var io = require('socket.io-client');
var serverUrl = 'http://54.67.18.228:8080';
var conn = io.connect(serverUrl);
  
var p1 = 'test';
conn.emit('test', p1, function(resp, data) {
     console.log('server sent resp code ' + resp);
 });