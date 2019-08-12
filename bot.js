const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

bot.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'hosgeldiniz-log');
  if (!channel) return;
  if(!channel) return message.channel.send(" `mod-log` İsminde Yazı Kanalı Bulamıyorum.!");

  channel.send(`Sunucuya hoşgeldiniz, ${member}`);
  const sunucubilgi = new Discord.RichEmbed()
  .setAuthor(`**Aramıza Hoşgeldin.** 🚀 ${member}`)
  .setColor(3447003)
  .setTimestamp()
  .setDescription('')
  .setImage(`https://cdn.discordapp.com/attachments/584989861719572482/590576147331547148/marsa-hosgeldiniz.gif`)
  return message.channel.sendEmbed(sunucubilgi);
});

client.on('message', msg => {
  if (msg.content === 'amk') {
    client.channels.get(607661848602607656)
    msg.delete(5)
    msg.reply(' `Lütfen şunu kes! Başka işler ile ilgilenir misin?` ');

    exports.conf = {
      enabled: true,
      guildOnly: true,
      aliases: ['amk'],
      permLevel: 2
    };
  }
});

client.on('message', msg => {
  if (msg.content === 'aq') {
    msg.delete(5)
    msg.reply(' `Lütfen şunu kes! Başka işler ile ilgilenir misin?` ');
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
    msg.delete(5)
    msg.reply(' `Lütfen şunu kes! Başka işler ile ilgilenir misin?` ');
  }
});

client.on('message', msg => {
  if (msg.content === 'orospu cocugu') {
    client.channels.get(597360780605652998)
    msg.delete(5)
    msg.reply(' `Lütfen şunu kes! Başka işler ile ilgilenir misin?` ');
  }
});

client.on('message', msg => {
  if (msg.content === 'ana skm') {
    client.channels.get(597360780605652998)
    msg.delete(5)
    msg.reply(' `Lütfen şunu kes! Başka işler ile ilgilenir misin?` ');
  }
});

client.on('message', msg => {
  if (msg.content === 'anan sikim') {
    client.channels.get(597360780605652998)
    msg.delete(5)
    msg.reply(' `Lütfen şunu kes! Başka işler ile ilgilenir misin?` ');
  }
});
//selamün aleyküm
client.on('message', msg => {
  if (msg.content === 'discord.gg') {
    client.channels.get(597360780605652998)
    msg.delete(5)
    msg.reply(' `Lütfen şunu kes! Başka işler ile ilgilenir misin?` ');
  }
});
//ᴀᴍᴋ
client.on('message', msg => {
  if (msg.content === 'ᴀᴍᴋ') {
    msg.delete(5)
    msg.reply(' `Lütfen şunu kes! Başka işler ile ilgilenir misin?` ');
  }
});
//ᴀǫ
client.on('message', msg => {
  if (msg.content === 'ᴀǫ') {
    msg.delete(5)
    msg.reply(' `Lütfen şunu kes! Başka işler ile ilgilenir misin?` ');
  }
});
client.on('message', msg => {
  if (msg.content === 'Selamun aleküm') {
    msg.reply('**Aleyküm Selam Hoş Geldin** 🚀');
  }
});

client.on('message', msg => {
  if (msg.content === 'selamün aleküm') {
    msg.reply('**Aleyküm Selam Hoş Geldin** 🚀');
  }
});

client.on('message', msg => {
  if (msg.content === 'Selamün aleküm') {
    msg.reply('**Aleyküm Selam Hoş Geldin** 🚀');
  }
});

client.on('message', msg => {
  if (msg.content === 'Selam') {
    msg.reply('**Aleyküm Selam Hoş Geldin** 🚀');
  }
});

client.on('message', msg => {
  if (msg.content === '!tag') {
    msg.channel.send('⸘');
  }
});

client.on('message', msg => {
  if (msg.content === 'slm') {
    msg.reply('**Aleyküm Selam Hoş Geldin** 🚀');
  }
});

client.on('message', msg => {
  if (msg.content === 'Slm') {
    msg.reply('**Aleyküm Selam Hoş Geldin** 🚀');
    setTimeout(function(){
}, 1000);
  }
});

client.on('message', msg => {
  if (msg.content === 'Sea') {
    msg.reply('**Aleyküm Selam Hoş Geldin** 🚀');
  }
});

client.on('message', msg => {
  if (msg.content === 'sea') {
    msg.reply('**Aleyküm Selam Hoş Geldin** 🚀');
  }
});

client.on('message', msg => {
  if (msg.content === 'SEA') {
    msg.reply(' `Aleyküm Selam Hoş Geldin🚀`');
  }
});

client.on('message', msg => {
  if (msg.content === 'Selamm') {
      msg.reply('**Aleyküm Selam Hoş Geldin** 🚀');
}
});

client.on('message', msg => {
  if (msg.content === 'sᴇʟᴀᴍᴜɴ ᴀʟᴇʏᴋᴜᴍ') {
      msg.reply('**Aleyküm Selam Hoş Geldin** 🚀');
}
});
//sᴀʟᴀᴋ
client.on('message', msg => {
  if (msg.content === 'sᴀʟᴀᴋ') {
    msg.reply('**Sende MALSIN** ! 💡');
  }
});

client.on('message', msg => {
  if (msg.content === 'Salak') {
    msg.reply('**Sende MALSIN** ! 💡');
  }
});

client.on('message', msg => {
  if (msg.content === 'Salak') {
    msg.reply('**Sende MALSIN** ! 💡');
  }
});

client.on('message', msg => {
  if (msg.content === 'SALAK') {
    msg.reply('**Sende MALSIN** ! 💡');
  }
});
//ᴍᴀʟ
client.on('message', msg => {
  if (msg.content === 'Mal') {
    msg.reply('**Sende Salaksın** ! 💡');
  }
});

client.on('message', msg => {
  if (msg.content === 'ᴍᴀʟ') {
    msg.reply('**Sende Salaksın** ! 💡');
  }
});

client.on('message', msg => {
  if (msg.content === 'Günaydın') {
    msg.reply('**Günaydın Kaptan** ! `Hoş Geldin` 🚀');
  }
});
//ɢᴜɴᴀʏᴅɪɴ
client.on('message', msg => {
  if (msg.content === 'ɢᴜɴᴀʏᴅɪɴ') {
    msg.reply('**Günaydın Kaptan** ! `Hoş Geldin` 🚀');
  }
});

client.on('message', msg => {
  if (msg.content === 'günaydın') {
    msg.reply('**Günaydın Kaptan** ! `Hoş Geldin` 🚀');
  }
});

client.on('message', msg => {
  if (msg.content === 'Gunaydn') {
    msg.reply('**Günaydın Kaptan** ! `Hoş Geldin` 🚀');
  }
});

client.on('message', msg => {
  if (msg.content === 'GÜNAYDIN') {
    msg.reply('**Günaydın Kaptan** ! `Hoş Geldin` 🚀');
  }
});

client.on('message', msg => {
  if (msg.content === 'GUNAYDIN') {
    msg.reply('**Günaydın Kaptan** ! `Hoş Geldin` 🚀');
  }
});

client.on('message', msg => {
  if (msg.content === 'Tünaydın') {
      msg.reply('**Tünaydın Kaptan** ! `Hoş Geldin` 🚀');
}
});

client.on('message', msg => {
  if (msg.content === 'tünaydın') {
      msg.reply('**Tünaydın Kaptan** ! `Hoş Geldin` 🚀');
}
});
//bot naber
client.on('message', msg => {
  if (msg.content === 'bot naber') {
      msg.reply(' `İyiyim siz nasılsınız?` 😍');
}
});

client.on('message', msg => {
  if (msg.content === 'Bot naber') {
      msg.reply(' `İyiyim siz nasılsınız?` 😍');
}
});

client.on('message', msg => {
  if (msg.content === 'Bot Naber') {
      msg.reply(' `İyiyim siz nasılsınız?` 😍');
}
});


client.on('message', msg => {
  if (msg.content === 'Nasılsın') {
      msg.reply(' `İyiyim siz nasılsınız?` 😍');
}
});

client.on('message', msg => {
  if (msg.content === 'Sen nasılsın') {
      msg.reply(' `Çok iyiyim burası çok yalnız hissetiriyor..` 🎈');
}
});

client.on('message', msg => {
  if (msg.content === 'sen nasılsın') {
      msg.reply(' `Çok iyiyim burası çok yalnız hissetiriyor..` 🎈');
}
});

client.on('message', msg => {
  if (msg.content === 'Sen Nasılsın') {
      msg.reply(' `Çok iyiyim burası çok yalnız hissetiriyor..` 🎈');
}
});

client.on('message', msg => {
  if (msg.content === 'Naber') {
      msg.reply(' `İyiyim siz nasılsınız?` 😍');
}
});

client.on('message', msg => {
  if (msg.content === 'naber') {
      msg.reply(' `İyiyim siz nasılsınız?` 😍');
}
});

client.on('message', msg => {
  if (msg.content === 'iyi') {
      msg.reply(' `İyi olmana sevidim!` 😍');
}
});

client.on('message', msg => {
  if (msg.content === 'kötü') {
      msg.reply(' `Kötü olmana üzüldüm kaptan.` 🤔');
}
});

client.on('message', msg => {
  if (msg.content === 'napıyon') {
      msg.reply(' `İyidir Sunucuya Bakıyorum.` 🖤');
}
});

client.on('message', msg => {
  if (msg.content === 'Oc') {
    client.channels.get(597360780605652998)
    msg.delete(5)
      msg.reply(' `Lütfen şunu kes! Başka işler ile ilgilenir misin?` ');
}
});

client.on('message', msg => {
  if (msg.content === '!p discord.gg') {
    client.channels.get(597360780605652998)
    msg.delete(5)
      msg.reply(' `Lütfen şunu kes! Başka işler ile ilgilenir misin?` ');
}
});

client.on('message', msg => {
  if (msg.content === '!p https://discord.gg') {
    client.channels.get(597360780605652998)
    msg.delete(5)
      msg.reply(' `Lütfen şunu kes! Başka işler ile ilgilenir misin?` ');
}
});

client.on('message', msg => {
  if (msg.content === '!phttps://discord.gg') {
    client.channels.get(597360780605652998)
    msg.delete(5)
      msg.reply(' `Lütfen şunu kes! Başka işler ile ilgilenir misin?` ');
}
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
      msg.reply(' `Aleyküm Selam Hoş Geldin!`🚀');
}
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
