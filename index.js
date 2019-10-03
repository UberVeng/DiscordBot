const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjI5MjEyNTU1NzYzNjQ2NDY0.XZWeIw.Pzlfab0tX4RxS6K4zRgTGw4PnsU';

bot.on('ready', () =>{
    console.log('this bot is online');
});

bot.on('message', mgs=>{
    if (mgs.content === "Ы)"){
        mgs.reply('ЫЫЫЫЫЫ)))');
    }
})

bot.login(token);