

module.exports = function (app, connection) {

	app.post('/esterlin', function (req, res) {

		var data = req.body;

		console.log(data);

		// connection.connect();

		var adding = "INSERT INTO user (first_name,  lastname)",
			value = "VALUES ('" + data.first_name + "','" + data.lastname + "')";

		console.log(adding + ' ' + value);	
 
		connection.query(adding + ' ' + value, function (error, results) {

		  if (error) throw error;

		  console.log('The solution is: ', results);
		});
		 
		connection.end();

		// send data to Database
	
		res.json("Confirmation");
	
	});
};
