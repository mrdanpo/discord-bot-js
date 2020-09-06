const fetch = require('node-fetch');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

module.exports = {
	name: 'joke',
	description: 'joke',
	async execute(message, args) {
        var response = await fetch(`https://sv443.net/jokeapi/v2/joke/any`);
        response = await response.json();
        
        if (response.type == 'twopart'){
            message.channel.send(response.setup);
            await sleep(3000);
            message.channel.send(response.delivery);
        }
        else{
            message.channel.send(response.joke);   
        }
	},
};