var redis = require('redis');
var subscriber = redis.createClient();
var publisher = redis.createClient();

var msg_count = 0;

subscriber.on("subscribe", function (channel, count) {
	console.log("Subscriber subscribed to "+ channel + ", " + count + " total subscriptions.");
	if (count === 1) {
		publisher.publish("feed1", "Napalm in the morning!");
		publisher.publish("feed1", "Live long and prosper");
	}
});

subscriber.on("unsubscribe", function (channel, count) {
		console.log("Subscriber unsubscribed from "+ channel + ", " + count +" total subscriptions.");
		if (count === 0) {
			publisher.end();
			subscriber.end();
		}
});

subscriber.on("message", function (channel, message) {
	console.log("subscriber channel "+ channel + ": " + message);
	msg_count += 1;
	if (msg_count === 2) {
		subscriber.unsubscribe();
	}
});

subscriber.on("ready", function () {
	subscriber.subscribe("feed1");
});