const fetch = require('node-fetch');

module.exports = {
	name: 'gif',
	description: 'gif',
	async execute(message, args) {
        var response = await fetch(`https://api.tenor.com/v1/search?q=${args[0]}&contentFilter=off&key=${process.env.TENOR_API_KEY}`);
        var result = await response.json();

        message.channel.send(result.results[Math.floor((Math.random() * 20) + 0)].url);
	},
};