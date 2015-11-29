var mongoose = require('mongoose');

var clientSchema = new mongoose.Schema({
	name: String,
	email: String,
	phone: String,
	appointment: [Date],
	stylist_notes: String,

	createdAt: {type: Date, default: new Date()}
})

mongoose.model("clientSchema", clientSchema);