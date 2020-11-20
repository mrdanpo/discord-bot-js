module.exports = {
	name: 'rain',
	description: 'rain',
	async execute(message, args) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            // must be absolute path
            connection.play((require("path").join(__dirname, '../assets/rain.mp4')));
        }
	},
};