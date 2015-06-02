var Backbone = require("backbone");
var fs = require("fs");

module.exports = Backbone.Model.extend({
	defaults: {
	title: "new note",
	text: "",
	id: "new":
	tags: []
	},
	getNotes: function(){
	
	}
});