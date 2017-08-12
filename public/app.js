

$('button').on('click', function (event) {
	
	event.preventDefault();

	var firstname = $("#firstname").val().trim(), 
		lastname = $("#lastname").val().trim();

	var user = {
		first_name:firstname,
		lastname:lastname
	};

	console.log(user);

	$.post('/esterlin', user, function (data) {

		console.log(data);

	});


	// $.ajax();
});