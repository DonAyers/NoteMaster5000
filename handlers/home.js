//home.js
var NoteList = require("../models/noteList");
var auth = require("../auth");

module.exports = function(req, res){
	var list = new NoteList();
	list.load(function(){
		var user = req.params.user
		console.log(user);
		var filtered = list.where({user: user});
		list.reset(filtered);
		var data = list.toJSON();

		if(req.state["loggedIn"]){
			console.log("loggedIn");
			var reply = res.view("home", {
				title: "Notes",
				notes: data
			});
			//reply.state("loggedIn", user);	
		}else{
			var reply = res.view("login", {
				title: ""
			});
			//reply.state("loggedIn", "true");
		}
		
	});
	
};