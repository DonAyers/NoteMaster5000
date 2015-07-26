//index.js
var hapi = require("hapi");
var server = new hapi.Server();

var port = process.env.PORT || 8000;

server.connection({port:port});
server.views({
	engines: {
		html: require("handlebars")
	},
	path: "./views",
	layoutPath: ".",
	layout: "layout",
	isCached: false
});

//server.path(__dirname + '..build');

var Note = require("./models/note");

var sql = require("./database");

sql.init(function(){
	console.log("database ready");
	server.start();
});


var routes = require("./routes")
server.route(routes);