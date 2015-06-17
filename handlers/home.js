//home.js
var NoteList = require("../models/noteList");
var auth = require("../auth");

module.exports = function(req, res){
	var list = new NoteList();
	list.load(function(){
		var user = req.params.user
		
		var filtered = list.where({user: user});
		list.reset(filtered);
		var data = list.toJSON();

		if(req.state["loggedIn"]){
			console.log("loggedIn");
			var reply = res.view("home", {
				title: "Notes",
				notes: data
			});
			reply.state("loggedIn", "true");	
		}else{
			var reply = res.view("login", {
				title: "Login"
			});
			//reply.state("loggedIn", "true");
		}
		
	});
	
};