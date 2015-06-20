//loginAuth.js

var auth = require("../auth")

module.exports = function(req, res) {
if(req.payload.username){
	var user = req.payload.username;
}else{
	var user = "anonymous";
}
var url = "/" + user;
auth(user, req.payload.password, function(err, authed) {
		if (!authed) {
			return res.redirect("/login");
		}else{
			return res("authed").state("loggedIn", user).redirect(url);
		}

	});
}