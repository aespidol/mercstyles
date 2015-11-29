stylistApp.controller('clientsController', function(clientFactory, $location){
	var that = this;
	that.client = ["Andrew"];
	that.clientCreate = function (data){
		// console.log(that.newClient);
		clientFactory.addClientRequest(that.newClient)
	}
	that.dashboard = function(data){
		clientFactory.getClient(that.login, function(data){
			console.log("Controller", data[0]);
			that.client = data[0];
			if(data[0].email == "espidol@gmail.com"){
				$location.path("/admin")
			} else {
				$location.path("/detail/"+ data[0]._id)
			}
		})
	}
})