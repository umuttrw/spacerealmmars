const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embed = new Discord.RichEmbed()
  .setDescription('**Daha fazla içerikler için bekleyiniz!**')
  .setColor(0xff008)
  .addField("**» Yenilikler**", ` \nSunucuya Komut Eklendi Bakmak İçin **m.yardım** Yazınız. \n Rapor Komutu Eklendi Bakmak İçin **m.report** Yazınız.\n `)


  return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yeni', 'new', 'news', 'yenilikler'],
  permLevel: 0
};

exports.help = {
  name: 'yenilikler',
  description: 'Bota eklenen Yeni Komutları Ve Düzeltilen Hatalar Hakkında Bilgi Verir.',
  usage: 'yenilikler'
};
