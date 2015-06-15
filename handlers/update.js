//update.js
var Note = require("../models/note");

module.exports = function(req, res) {
  var note = new Note(req.payload);
  console.log(req.payload);
  note.update(function() {
    var response = res("Note Updated");
    response.statusCode = 302;
    response.headers.Location = "/";
  });
};