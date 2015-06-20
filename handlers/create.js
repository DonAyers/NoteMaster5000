//create.js
var Note = require("../models/note");

module.exports = function(req, res) {
    console.log(req.payload);
    var note = new Note(req.payload);
    note.create(function() {
        var response = res("new note created");
        response.statusCode = 302;
        response.headers.Location = "/";
    });
};
