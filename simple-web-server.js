var http = require('http');
var redis = require('redis').createClient();

redis.set("requests", "0");

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});

	redis.incr("requests", function(err, reply) {
		res.write(reply + " requests");
		res.end();
	});

}).listen(1337, '127.0.0.1');


console.log('Server running at http://127.0.0.1:1337/');