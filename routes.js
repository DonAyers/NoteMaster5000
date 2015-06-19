// routes.js

var __dirname = "build";

module.exports = [
	{
		method: "GET",
		path: "/{user?}",
		handler: require("./handlers/home")
	},
	{
		method: "GET",
		path: "/login",
		handler: require("./handlers/login")
	},
	{
		method: "POST",
		path: "/login",
		handler: require("./handlers/loginAuth")
	},
	{
	    method: "POST",
	    path: "/delete/{id}",
	    handler: require("./handlers/delete")
  	},
  	{
	    method: "GET",
	    path: "/{user}/{tag}",
	    handler: require("./handlers/tag")
  	},
  	{
	    method: "POST",
	    path: "/create/",
	    handler: require("./handlers/create")
  	},
  	{
	    method: "POST",
	    path: "/signup/",
	    handler: require("./handlers/signup")
  	},
  	{
	    method: "POST",
	    path: "/update/",
	    handler: require("./handlers/update")
  	},		
	{
	    method: "GET",
	    path: "/assets/{param*}",
	    handler: {
	        directory: {
	            path: "build"

	        }
	    }
	},
	{
	    method: "GET",
	    path: "/{user}/assets/{param*}",
	    handler: {
	        directory: {
	            path: "build"

	        }
	    }
	}
]