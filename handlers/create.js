//create.js
var Note = require("../models/note");

module.exports = function(req, res) {
  var note = new Note(req.payload);
  note.create(function() {
    console.log("Note Added");
    var response = res("new note created");
    response.statusCode = 302;
    response.headers.Location = "/";
  });
};