const fetch = require('node-fetch');

module.exports = {
	name: 'gif',
	description: 'gif',
	async execute(message, args) {
        await fetch(`https://api.tenor.com/v1/search?q=${args[0]}&contentFilter=off&key=${process.env.TENOR_API_KEY}`);
        response = await response.json();

        message.channel.send(response.results[Math.floor((Math.random() * 20) + 0)].url);
	},
};