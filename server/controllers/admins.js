var mongoose = require('mongoose');
var Client = mongoose.model("clientRequest")

module.exports = (function(req,res){
	return{
		addClient: function(req,res){			
			var client = new Client({
				name: req.body.name,
				email: req.body.email,
				phone: req.body.phone,
				appointment: [req.body.date]
			})
			client.save(function (err){
				if(err){
					console.log(err);
				} else {
					console.log("success");
				}
			})
		},
		getClient: function(req,res){
			Client.find({}, function(err, clients){
				if(err){
					console.log(err)
				} else {
					res.json(clients);
				}
			})
		}
	}
})();