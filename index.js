require('dotenv').config();
//

//VARIABLES
const keep_alive = require('./keep_alive.js')
const { Client, GatewayIntentBits } = require('discord.js');
const east = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});
const ver = "1.12.1";
const game = 'being gay and doing crimes';
//

east.on('ready', () => {
    console.log(`${east.user.username} is ready to perform`);
    east.user.setPresence({ activities: [{ name: game }] })
})

east.on('messageCreate', (message) => {
    //roles
    let role_east = message.guild.roles.cache.find(r => r.name === "east")

    //channels
    let goatchannel = message.guild.channels.cache.find(c => c.name === "heybotgivemeagoatpic")

    // to avoid duplication
    if (message.author.bot) { return }

    // say "hi @east"
    switch (message.content.toLowerCase()) {
        case `hi ${east.user.toString()}`:
        case `hi ${role_east.toString()}`:
        case `hi east`:
        case `hey ${east.user.toString()}`:
        case `hey ${role_east.toString()}`:
        case `hey east`:
        case `yo ${east.user.toString()}`:
        case `yo ${role_east.toString()}`:
        case `yo east`:

            message.reply('Hello!').catch(console.error)
            console.log('Hello!')
            return;
    }

    //user messages
    if (east.user.presence.activities.toString() !== game) {
        east.user.setPresence({ activities: [{ name: game }] })
        console.log(`activity reset`)
    }

    else if (message.channelId === goatchannel.id) {
        //if (message.content.toLowerCase() === "hey bot give me a goat pic") {
        if (message.content.toLowerCase().includes("hey bot give me a goat pic")) {
            let a = Math.floor(Math.random() * 44);

            message.reply({ files: ['./img/goats/' + a + '.jpg'] }).catch(console.error)
            if (a == 0) {
                //message.member.roles.add(role_catpic).catch(console.error)
                console.log("cat pic given")
            } else { console.log("goat pic given") }
        }
        else if (message.content.toLowerCase().includes("hey bot give me a girlfriend")){
            message.reply({files: ['./img/goats/42.jpg']}).catch(console.error)
        }
        else if (message.content.toLowerCase().includes("hey bot give me a boyfriend")){
            message.reply({files: ['./img/goats/43.jpg']}).catch(console.error)
        }
        /*else {
            message.delete().catch(console.error)
            console.log(`${message.author.tag}: ${message.content} deleted`);
        }*/
    }
    

    // display some bot info
    /*if (message.content.toLowerCase() === `hey bot info`) {
        console.log(`EAST\nversion: ${ver}`)
        console.log(`activity: ${east.user.presence.activities}`)
    }*/

    // hey bot give me a goat pic
    
})

//
east.login(process.env.TOKEN);
