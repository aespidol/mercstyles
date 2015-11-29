stylistApp.controller('adminsController', function(adminFactory, $location, $routeParams){
	var that = this;

	if($routeParams.id){

		adminFactory.getClientDetail($routeParams, function(data){
			that.clients = data[0];
		})
		console.log(true)

	} else {

		adminFactory.getClients(function(data){
			console.log("Controller", data);
			that.clients = data
		});
		console.log(false)

	}

	that.adminLogin = function (){
		console.log("test")
		$location.path("/dash")
	}
	that.addClient = function(){
		adminFactory.addClient(that.client)
		$location.path("/dash")
	}
})