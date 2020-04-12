const Discord = require('discord.js');
const bot = new Discord.Client();
const embed = new Discord.MessageEmbed();

require('dotenv').config();

console.log(process.env.DISCORD_APP_KEY);

const token = process.env.DISCORD_APP_KEY;

const PREFIX = "p!";

bot.on('ready',() =>{
    console.log(`Bot online: ${bot.user.tag}.`);
});

bot.on('message', message =>{

    console.log(message.content.indexOf(PREFIX));
    if(message.content.indexOf(PREFIX) !== 0) 
        return;

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){

        case "sobre":
        case"about":
              message.channel.send("Este é um bot de avaliação. Versão 1.1");
        break;
        case "avaliar":
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