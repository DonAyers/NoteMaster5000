//noteList.js

var Backbone = require("backbone");
var sql = require("../database");
var Note = require("./note");

var NoteList = Backbone.Collection.extend({
	model: Note,
	load: function(callback){
		var self = this;
		//get user

		//select users notes from db
		var q = "SELECT content, user, tag, color, position, size, rowid as id FROM notes;";
		sql.connection.all(q, function(err, results){
			//populate list from said data
			self.reset(results);
			//console.log(results);
			//call callback
			callback();
		});
		
	}
});

module.exports = NoteList;