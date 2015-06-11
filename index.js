//index.js
var hapi = require("hapi");
var server = new hapi.Server();

server.connection({port:8080});
server.views({
	engines: {
		html: require("handlebars")
	},
	path: "./views",
	layoutPath: ".",
	layout: "layout",
	isCached: false
});

var Note = require("./models/note");

var sql = require("./database");
sql.init(function(){
	console.log("database ready");
	// var note = new Note({
	// 	content:"pick up milk"
	// });
	// note.create();
	// sql.connection.all("SELECT * FROM notes", function(err, results){
	// 	console.log(err, results);
	// });
	// console.log(note.toJSON);
	server.start();
});


var routes = require("./routes")
server.route(routes);