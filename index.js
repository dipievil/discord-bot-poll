const Discord = require('discord.js');
const bot = new Discord.Client();
const embed = new Discord.MessageEmbed();

const token = 'Njk4MTkxMzMzODE4NDk5MDkz.XpHtjw.pw05ghVGDAlaaMd9LWyPNwTkNP4';

const PREFIX = "p!";

bot.on('ready',() =>{
    console.log(`Bot online: ${bot.user.tag}.`);
});

bot.on('message', message =>{

    if(message.content.indexOf(PREFIX) !== 0) 
        return;

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){

        case "poll":
            embed
            .setColor(0xFFC300)
            .setTitle("Bot de Avaliação")
            .setDescription("Digite `p!poll PERGUNTA` para iniciar uma votação");

            if(!args[1]){
                message.channel.send(embed);
                break;
            }

            let msgArgs = args.slice(1).join(" ");

            message.channel.send('📜' + " **"+msgArgs+"** (clique na reação para votar!)").then(messageReaction => {
                    messageReaction.react("👍");
                    messageReaction.react("👌");
                    messageReaction.react("👎");
                    message.delete().catch(console.error);
            });
        break;
    }
});

bot.login(token);