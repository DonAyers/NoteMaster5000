//note.js

var Backbone = require("backbone");
var sql = require("../database");

var CREATE = "INSERT INTO notes (content, user, tag, color) VALUES ($content, $user, $tag, $color);";
var DELETE = "DELETE FROM notes WHERE rowid = $id;";
var UPDATE = "UPDATE notes SET content = $content, user = $user, tag = $tag, color = $color WHERE rowid = $id;";

var Note = Backbone.Model.extend({
	defaults: {
		content: "",
		user: "anonymous",
		tag: "",
		color: "#e74c3c",
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
			$tag: data.tag,
			$color: data.color
		}, function(err){
			if(err) console.log(err);
			callback();
		});
		//when done, call callback
	},
	delete: function(callback){
		calback = callback || function(){};
		//get data
		var data = this.toJSON();
		var statement = sql.connection.prepare(DELETE);
		statement.run({
			$id: data.id
		}, function(err){
			if(err) console.log(err);
			callback();
		});

	},
	update: function(callback){
		callback = callback || function(){};
		var data = this.toJSON();
		var statement = sql.connection.prepare(UPDATE);
		console.log(data.id, data.content, data.color, data.tag);
		statement.run(UPDATE,{
			$id: data.id,
			$content: data.content,
			$tag: data.tag,
			$color: data.color
		}, function(err){
			if(err) console.log(err);
			callback();
		});
	}
});

var note = new Note();
console.log(note.toJSON());

module.exports = Note;