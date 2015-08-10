var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');

// Twilio Credentials 
var accountSid = 'AC49c1232227be998da48ce8bdbb958500'; 
var authToken = '826f3fb5ae16726b42036512fffc0f82';
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 

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
	client.messages.create({ 
	to: "4436047674", 
	from: "+14438154485", 
	body: req.body.message,   
}, function(err, message) { 
	console.log(message.sid); 
});
	res.send();
})

app.listen(port, function() {
	console.log('It always feels like...' + port);
});