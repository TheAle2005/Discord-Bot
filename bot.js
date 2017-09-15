const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
var prefix = "-";
  client.on('ready', () => {
       console.log("[SUCCESS] AleBot is now ready!");
   });


client.on("message", function(message){
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

    if(command === 'help'){
      var embed = new Discord.RichEmbed()
      .addField('Commands for AleBot!\n\n',
      '**'+prefix+'profile** Shows your profile pic in a image.\n' +
      '**'+prefix+'bio** Tells you AleBots Owner Bio\'s profile', true)
      .setFooter("AleBot Copyright 2017. This was made by Alee14 and Ale!")
      .setColor(0x00FFFF)
      message.channel.sendEmbed(embed);
    }

    if(command === 'profile'){
        message.reply(message.author.avatarURL);
    }

    if(command === 'bio'){
      message.channel.send("<><><><><><><><><><><><>\n" +
                           "Bot Owner Bio!\n" +
                           "<><><><><><><><><><><><>\n" +
                           "Name: Alejandro V\n" +
                           "<><><><><><><><><><><><>\n" +
                           "User: @Alejandro V#8169\n" +
                           "<><><><><><><><><><><><>\n" +
                           "Birthday: May 10, 2005\n" +
                           "<><><><><><><><><><><><>\n" +
                           "Gender: Male\n" +
                           "<><><><><><><><><><><><>\n" +
                           "Country: United States\n" +
                           "<><><><><><><><><><><><>\n" +
                           "Favorite Sport: Soccer\n" +
                           "-------------------------------------------\n" +
                           "More Coming Soon!\n" +
                           "-------------------------------------------")

    }

 });

 process.on('unhandledRejection', function(err, p) {
    console.log("[ERROR | UNCAUGHT PROMISE] " + err.stack);
});

 client.login (config.token).catch(function() {
       console.log("[ERROR] Login failed.");
   });
