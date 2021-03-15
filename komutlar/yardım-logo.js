const Discord = require('discord.js');
const ayarlar = require("../botlar.json")
exports.run = async (client, message, args) => { 
let botadi = ayarlar.botadi



let yardım = new Discord.MessageEmbed()  //V12 Koddur
.setAuthor(`${botadi}`)
.setColor('BLUE')
.setDescription(`[**__${botadi}__**](https://sdadsa.com)`)
.addField(`${botadi} Logo Menüsü`,`
**:white_small_square: = \`efsane\` : Efsane Logo Üretir**
**:white_small_square: = \`ejderha\` : Ejderha Logo Üretir**
**:white_small_square: = \`flash\` : Flash Logo Üretir**
**:white_small_square: = \`gamer\` : Gamer Logo Üretir**
**:white_small_square: = \`graffiti\` : Graffiti Logo Üretir**
**:white_small_square: = \`köpek\` : Köpek Logo Üretir**
**:white_small_square: = \`orumcek\` : Orumcek Logo Üretir**
**:white_small_square: = \`roket\` : Roket Logo Üretir**
**:white_small_square: = \`s\` : S Logo Üretir**
`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.addField(`${botadi}`,`[Botu Davet Et](link) **|** [Destek Sunucumuz](link)`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['logolar', 'logo-lar'], 
  permLevel: 0
};
exports.help = {
  name: 'logo'
}; 