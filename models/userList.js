//noteList.js

var Backbone = require("backbone");
var sql = require("../database");
var User = require("./user");

var UserList = Backbone.Collection.extend({
	model: User,
	load: function(callback){
		var self = this;
		//select users from db
		var q = "SELECT * FROM users;";
		sql.connection.all(q, function(err, results){
			//populate list from said data
			self.reset(results);
			//console.log(results);
			//call callback
			callback();
		});
		
	}
});

module.exports = UserList;


