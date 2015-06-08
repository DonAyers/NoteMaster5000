//note.js

var Backbone = require("backbone");
var sql = require("../database");

var CREATE = "INSERT INTO notes (content, user, tag) VALUES ($content, $user, $tag);";
var DELETE = "DELETE FROM notes WHERE rowid = $id;";

var Note = Backbone.Model.extend({
	defaults: {
		content: "",
		user: "anonymous",
		tag: "",
		id: null
	},
	create: function(callback){
		callback = callback || function(){};
		//get its own data
		var data = this.toJSON();
		// run and insert on the db
		
		//pass in its data
		sql.connection.run(CREATE, {
			$content: data.content,
			$user: data.user,
			$tag: data.tag
		}, function(err){
			if(err) console.log(err);
			callback();
		});
		//when done, call callback
	},
	delete: function(callback){
		calback = callback || function(){};
		//get data
		var data = this.toJson();
		var statement = sql.connection.prepare(DELETE);
		statement.run({
			$id: data.id
		}, function(err){
			if(err) console.log(err);
			done();
		});

	}
});

var note = new Note();
console.log(note.toJSON());

module.exports = Note;