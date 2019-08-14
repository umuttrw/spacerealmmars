const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("⸘ Komutlar")
  .setDescription('⚠️ Space Realm: Mars ⚠️')
  .setColor(151313)
  .addField("**⸘ Eğlence Komutları**", `**m.afk** = Aktif Olmayınca Kullan \n**m.banned** = Dene ve Gör! \n**m.kahkaha** = Kahkaha Atarsınız \n**m.herkesebendençay** = Herkese Çay Alırsınız. \n**m.koş** = Koşarsınız.\n**m.çayiç** = Çay İçersiniz. \n**m.çekiç** = İstediğiniz Kişiye Çekiç Atarsınız. \n**m.çayaşekerat** = Çaya Şeker Atarsınız. \n**m.yumruk-at** = Yumruk Atarsınız. \n**m.şanslısayım** = Bot Sizin Şanslı Sayınızı Söyler.`)
  .addField("**⸘ Kullanıcı Komutları**", `**m.report** = İstediğiniz Kullanıcıyı Reportlarsınız. \n**m.kısalt** = İstediğiniz Linki Kısaltarak Özelleştire Bilirsiniz. \n**m.yaz** = Bota İsediğinizi Yazdırırsınız. \n**m.sunucubilgi** = Bulunduğunuz Sunucu Hakkında Bilgi Verir. \n**m.sunucuresmi** = Bulunduğunuz Sunucunun Resmin Gösterir. \n**m.kullanıcıbilgim** = Sizin Hakkınızda Bilgi Verir. \n**m.avatarım** = Avatarınınızı Gösterir. `)
  .addField("**⸘ Sunucu Yetkilisi Komutları**", `**m.ban** = İstediğiniz Kişiyi Sunucudan Banlar. \n**m.kick**  = İstediğiniz Kişiyi Sunucudan Atar. \n**m.unban** = İstediğiniz Kişinin Yasağını Açar. \n**m.sustur** = İstediğiniz Kişiyi Susturur. \n**m.sil** = Belirtilen Miktarda Mesajı Silir. (Azami 100) \n**m.oylama** = Oylama Açar. \n**m.duyuru** = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**⸘ Botun Ana Komutları**", "**m.yardım** = BOT Komutlarını Atar. \n**m.bilgi** = BOT Kendisi Hakkında Bilgi Verir. \n**m.ping** = BOT Gecikme Süresini Söyler. \n**m.davet** = BOT Davet Linkini Atar. \n**m.istatistik** = BOT İstatistiklerini Gösterir.")
  .setFooter('⸘ Space Realm: Mars | Güncel Sürüm. [ ALFA 1.6V ]')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['y', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
