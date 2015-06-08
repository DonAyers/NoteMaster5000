//home.js
var NoteList = require("../models/noteList");

module.exports = function(req, res){
	var list = new NoteList();
		list.load(function(){
			var data = list.toJSON();
			//console.log(data);
			res.view("home", {
			title: "Notes",
			notes: data
		});
	});
	
};