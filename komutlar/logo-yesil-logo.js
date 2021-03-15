const Discord = require("discord.js");
const ayarlar = require("../botlar.json")
exports.run = (client, message, args) => {
  const botlar = ayarlar.botadi

let logoaltyap = args.slice(0).join("+");
if (!logoaltyap) return message.channel.send("Lütfen Bişey Yaz");
let link ="https://dynamic.brandcrowd.com/asset/logo/9397344b-3242-499e-a7da-285a1e5ad22f/logo?v=4&text=" + logoaltyap;

const logobotaltyapi = new Discord.MessageEmbed()
.setTitle(`${botlar} Yeşil Logosu`)
.setImage(link)
.setFooter(`${botlar} Yeşil Logosu`)
return message.channel.send(logobotaltyapi);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yesil-yazı'],
  permLevel: 0
};

exports.help = {
  name: "yeşil"
};
