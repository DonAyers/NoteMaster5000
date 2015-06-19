//user.js

var Backbone = require("backbone");
var sql = require("../database");

var CREATE = "INSERT INTO users (username, password) VALUES ($username, $password);";


var User = Backbone.Model.extend({
	defaults: {
		username: "anonymous",
		password: "password",
		id: null
	},
	addUser: function(callback){
		callback = callback || function(){};
		//get its own data
		var data = this.toJSON();
		// run and insert on the db
		
		//pass in its data
		sql.connection.run(CREATE, {
			$username: data.username,
			$password: data.password
		}, function(err){
			if(err) console.log(err);
			callback();
		});
		//when done, call callback
	}
});

 // var user = new User();
 // console.log(user.toJSON());

module.exports = User;