const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send({embed: {
                author: {
                    name: "⸘ Space Realm Mars",
                    icon_url: "https://cdn.discordapp.com/attachments/584992917962096660/597426429541744654/logoo-01.png"
                  },
                description: "**💯 AFK Kalmana üzüldüm kaptan.**"
              }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afk'],
  permLevel: 0
};

exports.help = {
  name: 'afk',
  description: 'Değişiklikleri gösterir.',
  usage: 'afk'
};
