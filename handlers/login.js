//login.js

var auth = require("../auth");

module.exports = function(req, res){

  	var data = req.payload;
  	var pass = data.password;
  	var user = data.username;

  	auth(user, pass, function(authed){
  		if(authed){
  		res.state("loggedIn", user);
  		res.redirect("/" + user);
  		
      console.log("not authed");
      }else{
	  		//res.state("loggedIn", "true");
	  		res.view("login", {
	  			title: "Please Login"
	  		});
        console.log("not authed");
	  	}

      console.log("authed", authed);
  	});
	
  	
  	
  	



  	

	// var reply = res.view("login", {
	//   title: user + "|List",
	//   users: data
	// });
	// reply.state("loggedIn", "true");
	
};