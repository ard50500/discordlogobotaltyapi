const Discord = require('discord.js');
const ayarlar = require("../botlar.json")
exports.run = async (client, message, args) => { 
let botadi = ayarlar.botadi



let yardım = new Discord.MessageEmbed()  //V12 Koddur
.setAuthor(`${botadi}`)
.setColor('BLUE')
.setDescription(`[**__${botadi}__**](https://dsdds.com)`)
.addField(`${botadi} Yardım Menüsü`,`
**:white_small_square: = \`logo\` : Genel Logoları Görüntülersiniz**
**:white_small_square: = \`efso-logo\` : Efsane Logoları Görüntülersiniz**
`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.addField(`${botadi}`,`[Botu Davet Et](link) **|** [Destek Sunucumuz](link)`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 0
};
exports.help = {
  name: 'yardım'
}; 