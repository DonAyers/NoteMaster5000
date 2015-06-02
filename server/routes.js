var fs = require("fs");

module.exports = [{
    method: "GET",
    path: "/assets/{param*}",
    handler: {
        directory: {
            path: "build/"
        }
    }
}, {
    method: "GET",
    path: "/other",
    handler: function(req, res) {
        res.view("index", {
            title: "Testing Title"
        });
    }
}, {
    method: "GET",
    path: "/",
    handler: function(req, res) {
        fs.readFile("simplenotes.json", "utf8", function(err, data) {
            var userList = JSON.parse(data);
            // console.log(userList.users);
            res.view("login", {
                users: userList.users,
                title: "Login"
            });
        });
    }
}, {
    method: "GET",
    path: "/{user}",
    handler: function(req, res) {
        fs.readFile("./simplenotes.json", "utf8", function(err, data) {
            var userName = req.params.user;
            var json = JSON.parse(data);

            // console.log(json.users[userName]);
            res.view("index", {
                title: userName + "'s List",
                userData: json.users[userName]
            });
        });
    }
}];
