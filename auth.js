//auth.js

module.exports = function(username, pass, callback){
	//callback = callback || function(){};
	var users = {
	    jim: {
	        username: "jim",
	        password: "jim123"
	    },
	    martha: {
	    	username: "martha",
	    	password: "martha123"
	    }
	};
	var user = users[username].username;
	var password = users[username].password;
	
	console.log("auth.js:", user, password);
	console.log("sent in:", username, password);
	
	if (!user) {
        return callback(false);
    }else if(user == username && password == pass){
    	return callback(true);
    }else{
    	return callback(false);
    }
    
	
};