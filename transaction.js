var redis = require('redis');
var client = redis.createClient();

client.on("error", function(err) {
	console.log("error event - "+ client.host + ":" + client.port + " - " + err);
});

client.set("count", "1", redis.print);
client.get("count", redis.print);
client.multi(redis.print)
.set("k1", "what")
.incr("count")
.exec(redis.print);
client.mget("count", "k1", redis.print);

client.quit(function (err, res) {
	console.log("El finito");
})