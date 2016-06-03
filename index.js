var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) {
  console.log("A client has connected");
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});


server.listen(PORT , function(){
	console.log("Listening on port " + PORT);
});

