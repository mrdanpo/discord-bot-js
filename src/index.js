const fs = require('fs');
const Discord = require('discord.js');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
prefix = ''

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
    prefix = `<@!${client.user.id}>`;
});

client.on('message', message => {
    
    if (!message.content.startsWith(`${prefix}`)) {
        return;
    } 
    try {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        if (!client.commands.has(command)) return;
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply(`I can't do that right now.`);
    }
});

client.login(process.env.DISCORD_BOT_CLIENT_SECRET);