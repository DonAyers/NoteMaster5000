var fs = require("fs");
var hapi = require("hapi");
var server = new hapi.Server();
var routes = require("./server/routes");

server.connection({
  port: 8000
});

server.start(function(){
  console.log("server running...");
});

server.views({
  path: "views/templates",
  layoutPath:"views/",
  layout:"default",
  engines: {
    html: require("handlebars")
  },
  isCached: false
});

server.route(require("./server/routes"));





