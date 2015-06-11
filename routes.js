// routes.js

module.exports = [
	{
		method: "GET",
		path: "/",
		handler: require("./handlers/home")
	},
	{
	    method: "POST",
	    path: "/delete/{id}",
	    handler: require("./handlers/delete")
  	},
  	{
	    method: "POST",
	    path: "/create/",
	    handler: require("./handlers/create")
  	},		
	{
	    method: "GET",
	    path: "/assets/{param*}",
	    handler: {
	        directory: {
	            path: "build/"
	        }
	    }
	}
]