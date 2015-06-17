//index.js
var hapi = require("hapi");
var server = new hapi.Server();

server.connection({port:8000});
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
	server.start();
});


var routes = require("./routes")
server.route(routes);