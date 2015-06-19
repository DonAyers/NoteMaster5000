//signup.js
var User = require("../models/user");

module.exports = function(req, res) {
  var user = new User(req.payload);
  user.addUser(function() {
    console.log(req.payload);
    var response = res("new user added");
    response.statusCode = 302;
    response.headers.Location = "/";
  });
};