//tag.js
var NoteList = require("../models/noteList");

module.exports = function(req, res){
	


	var list = new NoteList();
	list.load(function(){
	 	var user = req.params.user;
		var tag = req.params.tag;

	 	//console.log(user, tag);
		var filtered = list.where({user: user, tag: tag});
		list.reset(filtered);
		var data = list.toJSON();

		if(req.state["loggedIn"]){
			console.log("loggedIn");
			var reply = res.view("home", {
				title: "NoteMaster",
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