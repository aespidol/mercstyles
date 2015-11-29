stylistApp.factory("adminFactory", function ($http){
	var factory = {}
	factory.addClient = function(info){
		$http.post("/addClient", info).then(function (output){
			console.log(output)
		})	
	}
	factory.getClients = function (callback){
		$http.get("/getClients").then(function (res){
			callback(res.data)
		})
	}
	factory.getClientDetail = function (data, callback){
		console.log("Factory",data);
		$http.post("/getClientDetail", data).then(function (res){
			callback(res.data);
		})
	}
	return factory;
})