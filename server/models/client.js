var mongoose = require('mongoose');

var clientRequestSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	phone: String,
	appointment: Date,
	createdAt: {type: Date, default: new Date()}
})

mongoose.model("clientRequest", clientRequestSchema);