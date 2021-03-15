const Discord = require('discord.js');
const ayarlar = require("../botlar.json")
exports.run = async (client, message, args) => { 
let botadi = ayarlar.botadi



let yardım = new Discord.MessageEmbed()  //V12 Koddur
.setAuthor(`${botadi}`)
.setColor('BLUE')
.setDescription(`[**__${botadi}__**](https://dasdassda.com)`)
.addField(`${botadi} Efsane Logo Menüsü`,`
**:white_small_square: = \`logo-test1\` : Efsane Logo Üretir**
**:white_small_square: = \`logo-test2\` : Efsane Logo Üretir**
**:white_small_square: = \`logo-test3\` : Efsane Logo Üretir**
**:white_small_square: = \`logo-test4\` : Efsane Logo Üretir**
**:white_small_square: = \`logo-test4\` : Efsane Logo Üretir**
**:white_small_square: = \`logo-test5\` : Efsane Logo Üretir**
**:white_small_square: = \`logo-test6\` : Efsane Logo Üretir**
**:white_small_square: = \`logo-test7\` : Efsane Logo Üretir**
**:white_small_square: = \`logo-test8\` : Efsane Logo Üretir**
**:white_small_square: = \`logo-test9\` : Efsane Logo Üretir**
**:white_small_square: = \`logo-test10\` : Efsane Logo Üretir**
`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.addField(`${botadi}`,`[Botu Davet Et](link) **|** [Destek Sunucumuz](link)`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['efsologo', 'efso-logo', 'efsanelogo'], 
  permLevel: 0
};
exports.help = {
  name: 'efsane-logo'
}; 