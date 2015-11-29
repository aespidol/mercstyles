var clients = require('./../server/controllers/clients.js')
var admins = require('./../server/controllers/admins.js')

module.exports = function (app) {
	app.get("/getClients", function(req,res){
		clients.getClients(req,res)
	})
	app.post("/addClient", function (req,res){
		clients.addClientRequest(req)
	})
	app.post("/getClientDetail", function (req,res){
		clients.getClientDetail(req, res)
		console.log("Routes:", req.body.id)
	})
}