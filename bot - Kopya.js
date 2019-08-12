const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`BOT: ${client.user.username} adı ile giriş yaptı!`);
});

client.on('message', msg => {
  console.log(`LOG: S: ${msg.guild.name} M: ${msg.content} Y: ${msg.author.tag}`);
  if (msg.author.id === ayarlar.id) return;
  if (msg.author.bot) return;

  if (!msg.content.startsWith(prefix)) {
	  return;
  }
  if (msg.content.toLowerCase() === prefix + 'ping') {
    msg.reply('Roket Hızım :rocket: **' + client.ping + '** ms');
  }
  if (msg.content === prefix + 'Sigara') {
    msg.send('Sigara İçiyorum!');
    msg.edit(' :smoking: :cloud: :cloud: :cloud: ');
    msg.edit(' :smoking: :cloud: :cloud: ');
    msg.edit(' :smoking: :cloud:  ');
    msg.edit(' :smoking:  ');
    msg.edit(' Sigaram Bitti! ');
  }
  if (msg.content.toLowerCase() === prefix + 'yaz') {
    msg.delete();
    msg.channel.sendMessage(msg.content);
  }
  if (msg.content.toLowerCase() === prefix + 'sil') {
    msg.channel.bulkDelete(5000);
    msg.channel.sendMessage("__adet mesaj silindi!__");
  }
  if (msg.content.toLowerCase() === prefix + 'reboot') {
    if (msg.author.id !== ayarlar.sahip) {
      msg.reply('__Benim yapımcım değilsin!__');
    } else {
      msg.channel.sendMessage(`Bot yeniden başlatılıyor...`).then(msg => {
      console.log(`BOT: Bot yeniden başlatılıyor...`);
      process.exit(0);
    })
   }
  }
});

client.on('message', msg => {
  if (msg.content === '!p https://discord.gg') {
    msg.delete(5)
    msg.reply(' `Lütfen şunu kes! Başka işler ile ilgilenir misin?` ');
  }
});

client.on('message', msg => {
  if (msg.content === '!p') {
    msg.delete(10)
    msg.reply(' `Lütfen şunu kes! Başka işler ile ilgilenir misin?` ');
  }
});

client.login(ayarlar.token);
