var mongoose = require('mongoose');
var Client = mongoose.model("clientRequest")

module.exports = (function(req,res){
	return{
		addClientRequest: function(req,res){			
			var client = new Client({
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				email: req.body.email,
				phone: req.body.phone,
				appointment: req.body.date
			})
			client.save(function (err){
				if(err){
					console.log(err);
				} else {
					console.log("success");
				}
			})
		},
		getClientDetail: function(req,res){
			if(req.body.id){
			Client.find({ _id: req.body.id }, function(err, clients){
				if(err){
					console.log(err)
				} else {
					console.log("Controller:", clients)
					res.json(clients);
				}
			})
			} else {
			Client.find({ email: req.body.email }, function(err, clients){
				if(err){
					console.log(err)
				} else {
					res.json(clients);
				}
			})
			}
		},
		getClients: function(req,res){
			Client.find({}, function(err, clients){
				if(err){
					console.log(err)
				} else {
					res.json(clients)
				}
			})
		}
	}
})();