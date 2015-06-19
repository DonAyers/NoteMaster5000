//db.js
var sqlite = require("sqlite3");

var facade = {
	connection:null,
	init: function(callback){
		var db = new sqlite.Database("notes.db");
		facade.connection = db;
		db.run("CREATE TABLE IF NOT EXISTS notes (content, user, id, tag, color) CREATE TABLE IF NOT EXISTS users (username, password)", function(){
			callback();
		});

		// db.run("CREATE TABLE IF NOT EXISTS users (username, password)", function(){
		// 	callback();
		// });
	}
};

module.exports = facade;

