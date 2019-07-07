const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(999999)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('**DM den Mesaj attım**! :rocket: ');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(999999)
    .setAuthor(message.author.username, message.author.avatarURL)
	.addField("**⸘ Kurucu**", " 死Mr. Cнιvαѕ E❤B#6100 ", )
  .addField("**⸘ Yapı Numarası**", " ALFA v0.1.1 ", )
  .addField("**⸘ Üretim Tarih**", " 7 Temmuz 2019 ", )
	.addField("**⸘ Bot Davet**", " [Davet Et](https://discordapp.com/api/oauth2/authorize?client_id=586992509977231443&permissions=8&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Foauth2%2Fauthorize%3Fclient_id%3D586992509977231443%26scope%3Dbot%26permissions%3D0&scope=bot)", )
  .addField("**⸘ Ana sunucusu**", " [Sunucumuza Katıl](https://discord.gg/5Tgdb4p) ", )
	.setThumbnail("https://cdn.discordapp.com/attachments/590244196275847188/597368593839292450/gezegen-1.png");
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
