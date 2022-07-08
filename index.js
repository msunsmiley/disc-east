require('dotenv').config();
//

//VARIABLES
const {Client, Intents} = require('discord.js');
const east = new Client({ intents:[Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
//

//

east.on('ready',()=>{
    console.log(`${east.user.username} is ready to perform`);
})

east.on('messageCreate', (message) => {
    var role_bball = message.guild.roles.cache.find(r=>r.name==="bowling ball")
    var role_udt = message.guild.roles.cache.find(r=>r.name==="ultimate dog toy")
    if (message.author.bot) {
        return;
    }
    else if (message.content.toLowerCase()===(`hi ${east.user.toString()}`)) {
        message.reply('Hello!');
    }
    else if (message.content==='😮'){
        if (message.member.roles.cache.has(role_bball.id)) {
            message.reply(`${message.author.toString()} 😔`)
        }
        else {
        message.reply(`${message.author.toString()} given bowling ball`);
        message.member.roles.add(role_bball);
        }
    }
    else if (message.content==='🦴'){
        if (message.member.roles.cache.has(role_udt.id)) {
            message.reply(`${message.author.toString()} 😔`)
        }
        else {
        message.reply(`${message.author.toString()} given ultimate dog toy`);
        message.member.roles.add(role_udt);}
    }
})

//
east.login(process.env.TOKEN);