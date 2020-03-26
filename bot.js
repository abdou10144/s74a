const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("692535721281454132")
setInterval(function() {
channel.send(`nbghik wlh ghir nbghik`);
}, 30)
})

client.login(process.env.BOT_TOKEN);