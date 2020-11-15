module.exports = {
	name: 'rain',
	description: 'rain',
	async execute(message, args) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            connection.play('../assets/rain.mp4');
        }
	},
};