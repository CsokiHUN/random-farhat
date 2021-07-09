require('dotenv').config()

const Discord = require('discord.js')
const bot = new Discord.Client()

const { randomFarhat } = require('./farhat.js')

bot.on('message', async (message) => {
    if (message.channel.id == '859094367783878656') {
        if (message.content == '!farhát') {
            const farhat = await randomFarhat()

            message.channel.send('Megjött a családi irány a boltba farhátért!', {
                files: [
                    farhat.url
                ]
            });
        }
    }    
})

bot.login(process.env.TOKEN)
