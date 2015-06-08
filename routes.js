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
	    method: "GET",
	    path: "/assets/{param*}",
	    handler: {
	        directory: {
	            path: "build/"
	        }
	    }
	}
]