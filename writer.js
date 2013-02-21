var redis = require('redis');
var client = redis.createClient();

client.on("error", function(err) {
	console.log("error event - "+ client.host + ":" + client.port + " - " + err);
});

client.LPUSH("msg", "Hello node-redis world!", redis.print);

client.quit(function (err, res) {
	console.log("El finito");
});