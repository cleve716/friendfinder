var express = require("express");

var app = express();


var PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//require("./app/routing/apiRoutes.js")(app);
//require("./app/routing/htmlRoutes.js")(app);
require("../friendfinder/FriendFinder/app/routing/apiRoutes")(app);
require("../friendfinder/FriendFinder/app/routing/htmlRoutes")(app);



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
