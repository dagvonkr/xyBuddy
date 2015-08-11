var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 8080;	


app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json()); // så slipper man res.send(JSON.stringify(num));




app.listen(port,function() {
	console.log('Listen to port: ', port); 
});