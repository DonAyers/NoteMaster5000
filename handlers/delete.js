//delete.js
var Note = require("../models/note");

module.exports = function(req, res) {
  var id = req.params.id;
  var note = new Note({ id: id});
  note.delete(function() {
    console.log("id: " + id + " deleted");
  });
};