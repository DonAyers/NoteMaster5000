//loginAuth.js

var auth = require("../auth")

module.exports = function(req, res) {
var user = req.payload.username;
var url = "/" + user;
auth(user, req.payload.password, function(err, authed) {
		if (!authed) {
			return res.redirect("/login");
		}else{
			return res("authed").state("loggedIn", user).redirect(url);
		}

	});
}