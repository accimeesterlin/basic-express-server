var path = require("path");


module.exports = function (app, connection) {
		
	app.get("/", function (req, res) {
		
		res.sendFile(path.join(__dirname, '/../views/index.html'));
		
	});



	app.get("/api", function (req, res) {
		
		res.json({api:[1, 2, 3, 4]});
	});


}
