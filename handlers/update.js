//update.js
var Note = require("../models/note");

module.exports = function(req, res) {
	var id = req.params.id;
	var user = req.payload.user;
	var content = req.payload.content;
	var tag = req.payload.tag;
	var color = req.payload.color;
	console.log(user, color, tag, content, id);
  var note = new Note({
  	id:id,
  	user: user,
  	content: content,
  	tag: tag,
  	color: color
  });
  console.log(id, req.payload);
  note.update(function() {
    var response = res("Note Updated");
    response.statusCode = 302;
    response.headers.Location = "/";
  });
};