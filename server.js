var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var session = require('express-session');

app.use(bodyParser.json());

require("./config/mongoose.js")
require("./config/routes.js")(app)

app.use(express.static(path.join(__dirname, './client')));

// Setting Session
app.set('trust proxy', 1)
app.use(session({
	secret: 'apertureScience',
	resave: false,
	saveUninitialized: true,
	cookie: { secure: true }
}))

app.listen(8000, function(){
	console.log("We are listening on 8000");
})