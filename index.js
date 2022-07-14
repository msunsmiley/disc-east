require('dotenv').config();
//

//VARIABLES
const {MessageAttachment,Client, Intents} = require('discord.js');
const east = new Client({ intents:[Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
//

east.on('ready',()=>{
    console.log(`${east.user.username} is ready to perform`);

    east.user.setPresence({ activities: [{ name: 'being gay and doing crimes' }] })
})
 

east.on('messageCreate', (message) => {
    //roles
    let role_bball = message.guild.roles.cache.find(r=>r.name==="bowling ball")
    let role_udt = message.guild.roles.cache.find(r=>r.name==="ultimate dog toy")
    let role_catpic = message.guild.roles.cache.find(r=>r.name==="cat pic??")
    let role_east = message.guild.roles.cache.find(r=>r.name==="east")
    //channels
    let goatchannel = message.guild.channels.cache.find(c=>c.name==="heybotgivemeagoatpic")

    // to avoid duplication
    if (message.author.bot) { return; }

    // say "hi @east"
    else if (message.content.toLowerCase()===`hi ${east.user.toString()}` ||
    message.content.toLowerCase()===`hi ${role_east.toString()}`||
    message.content.toLowerCase()===`hi east`||
    message.content.toLowerCase()===`hey east`||
    message.content.toLowerCase()===`hey ${east.user.toString()}`||
    message.content.toLowerCase()===`hey ${role_east.toString()}`
    ) {
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
            let a = Math.floor(Math.random()*35);
            
            message.reply({files:['./img/goats/' + a + '.jpg']}).catch(console.error)
            if(a==0){
                message.member.roles.add(role_catpic).catch(console.error)
                console.log("cat pic given")
            } else {console.log("goat pic given")}
        }
        if (message.content.toLowerCase() !== 'hey bot give me a goat pic') {
            message.delete().catch(console.error)
            console.log(`${message.author.tag}: ${message.content} deleted`);
        }
    }
})

//
east.login(process.env.TOKEN);