var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');

var app = express();
var port = 8888;

////////////////////////////
//		MIDDLEWARE
////////////////////////////

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
	extended: true
}))
app.use(bodyParser.json());
app.use(cors());

////////////////////////////
//		ENDPOINTS
////////////////////////////


app.get('/api/message', function (req, res) {
	return res.send({"message": "HELLOOOOOOOOOOOOOOOOOOOOOOOOOO!"})
});

app.post('/api/send_text_message', function (req, res) {
	console.log(req.body.message);
	res.send();
})

app.listen(port, function() {
	console.log('It always feels like...' + port);
});