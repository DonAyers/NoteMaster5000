//auth.js

var UserList = require("./models/userList");

module.exports = function(username, pass, callback) {
var users = new UserList();
	users.load(function() {
		var match = users.findWhere({username: username});
		if (match && match.get("password") == pass) {
			return callback(null, true);
		}
		return callback(null, false);
	});
};


