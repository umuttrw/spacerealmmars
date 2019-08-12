const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**İsim ve yaş olarak kayıt kısmına yazarak kurucu sizi sunucuya kaydedecektir.**  :white_check_mark:');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım', 'help'],
  permLevel: 3
};

exports.help = {
  name: '?yardım',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yardım [yazdırmak istediğiniz şey]'
};
