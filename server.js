var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var session = require('express-session');

app.use(session({secret: 'mercstylesrocks'}));
app.use(bodyParser.json());

// require("./config/mongoose.js")
// require("./config/routes.js")

app.use(express.static(path.join(__dirname, './client')));

var server = app.listen(8000, function(){
	console.log("We are listening on 8000");
})

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
	console.log('SERVER::WE ARE USING SOCKETS!');
	console.log(socket.id);
	socket.on('form_data', function(data){
		console.log(data)
		io.sockets.emit('form_pass', data)
	})
});