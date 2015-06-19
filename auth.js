//auth.js

var UserList = require("./models/userList");

var test = true;

module.exports = function(username, pass, callback){
	//callback = callback || function(){};
	// var users = {
	//     jim: {
	//         username: "jim",
	//         password: "jim123"
	//     },
	//     martha: {
	//     	username: "martha",
	//     	password: "martha123"
	//     }
	// };

	var users = new UserList();
	
	users.load(function(){
		var user = username;
		//console.log(user);
		

		var filtered = users.where({username: user});
		users.reset(filtered);
		var data = users.toJSON();
		//console.log(data[0].username, data[0].password);
		dbUser = data[0].username;
		dbPass = data[0].password;
		console.log(dbUser, username);
		console.log(dbPass, pass);
		test = false;
		
		

	});

	console.log(users);

	var data = users.toJSON();



	// if(data.hasOwnProperty('username')){
	// 	console.log("authed");
	// }else{
	// 	console.log("not authed");
	// }

	// console.log(username);
	
	// var password = users.password;
	
	// console.log("auth.js:", user, password);
	// console.log("sent in:", username, password);	
	
	// if (!user) {
 //        return callback(false);
 //    }else if(user == username && password == pass){
 //    	return callback(true);
 //    }else{
 //    	return callback(false);
 //    }

	console.log(test);
};