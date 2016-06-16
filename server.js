var middleware = require('./middleware.js');
var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;


//application level midd;e ware
app.use(middleware.logger);

//route level middle ware
app.get('/about', middleware.requireAuthentication, function(req, res) { //

	res.send('About us!');
});

//set a static html file
app.use(express.static(__dirname + '/public'));


app.listen(PORT, function() {
	console.log('express server started in port: ' + PORT );
});


