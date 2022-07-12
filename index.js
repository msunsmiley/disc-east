require('dotenv').config();
//

//VARIABLES
const {MessageAttachment,Client, Intents} = require('discord.js');
const east = new Client({ intents:[Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
//

east.on('ready',()=>{
    console.log(`${east.user.username} is ready to perform`);

    east.user.setPresence({ activites: [{ name: 'being gay and doing crimes' }] })
})
 

east.on('messageCreate', (message) => {
    //roles
    var role_bball = message.guild.roles.cache.find(r=>r.name==="bowling ball")
    var role_udt = message.guild.roles.cache.find(r=>r.name==="ultimate dog toy")
    //channels
    var goatchannel = message.guild.channels.cache.find(c=>c.name==="heybotgivemeagoatpic")

    // to avoid duplication
    if (message.author.bot) { return; }

    // say "hi @east"
    else if (message.content.toLowerCase()===(`hi ${east.user.toString()}`)) {
        message.reply('Hello!').catch(console.error)
        console.log('Hello!')
    }
    else if (message.content.toLowerCase() === (`test`)) {
        console.log('test')
      }
    // bowling ball
    else if (message.content==='😮'){
        if (message.member.roles.cache.has(role_bball.id)) {
            message.reply(`${message.author.toString()} 😔`).catch(console.error)
            console.log(`${message.author.tag} 😔`)
        }
        else {
        message.reply(`${message.author.toString()} given bowling ball`).catch(console.error)
        console.log(`${message.author.tag} given bowling ball`)
        message.member.roles.add(role_bball).catch(console.error)
        }
    // ultimate dog toy
    }
    else if (message.content==='🦴'){
        if (message.member.roles.cache.has(role_udt.id)) {
            message.reply(`${message.author.toString()} 😔`).catch(console.error)
            console.log(`${message.author.tag} 😔`)
        }
        else {
        message.reply(`${message.author.toString()} given ultimate dog toy`).catch(console.error)
        console.log(`${message.author.tag} given ultimate dog toy`)
        message.member.roles.add(role_udt).catch(console.error)
        }
    }
    // hey bot give me a goat pic
    else if(message.channelId === goatchannel.id){
        if(message.content.toLowerCase() === "hey bot give me a goat pic"){
            let a = Math.floor(Math.random()*14) + 1;
            
            message.reply({files:['./img/goats/' + a + '.jpg']}).catch(console.error)
            console.log("goat pic given")
        }
        if (message.content.toLowerCase() !== 'hey bot give me a goat pic') {
            message.delete().catch(console.error)
            console.log(`${message.author.tag}: ${message.content} deleted`);
        }
    }
})

//
east.login(process.env.TOKEN);