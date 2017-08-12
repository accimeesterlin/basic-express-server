var express = require("express");

var app = express();

var port = process.env.PORT || 8080;
var bodyParser = require("body-parser");


app.use(express.static('public'));

var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Septembre1',
  database : 'esterlin'
});
 



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


require("./routes/htmlroutes.js")(app, connection);
require("./routes/send.js")(app, connection);

app.listen(port, function () {
	console.log("Application' starting at port ", port);
});


