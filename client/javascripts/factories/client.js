stylistApp.factory("clientFactory", function ($http) {
	var factory = {};
	factory.addClientRequest = function (info){
		// console.log("factory", info)
		$http.post("/addClient", info).success(function(output){
			console.log("addAppointmentRequest", output);
		})
	}
	factory.getClient = function(data, callback){
		$http.post("/getClientDetail", data).then(function(res){
			console.log("Factory", res.data)
			callback(res.data);
		})
	}
	return factory;
})