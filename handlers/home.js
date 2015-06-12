//home.js
var NoteList = require("../models/noteList");

module.exports = function(req, res){
	var list = new NoteList();
	list.load(function(){
		var user = req.params.user
		var data = list.toJSON();
		
		//if(req.state["loggedIn"] == "true"){
			var reply = res.view("home", {
				title: "Notes",
				notes: data
			});
			reply.state("loggedIn", "true");	
		//}else{
			//var reply = res.view("login", {
			//	title: "Login"
			//});
		//}
		
	});
	
};