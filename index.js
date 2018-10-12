// framework for handling http interactions
var app = require("express")();

// tells compiler to store current directory to path
var path = __dirname;

app.get("/", function(req, res) {
  res.sendFile(path + "/home.html");
});

var port = process.env.PORT || 3000;

// run server
app.listen(port, function() {
  console.log("Listening on " + port);
});
