// require the discord.js module
const Discord = require('discord.js');
// implement config file
const { prefix, token } = require('./config.json');
// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger once after logging in
client.once('ready', () => {
    console.log('Ready!'); 
});
    
// login to Discord with your app token
+ client.login(token); 

client.on('message', message => {
    // if the message doesn't start with a prefix or sent by bot, exit
if (!message.content.startsWith(prefix) || message.author.bot) return;
    // args variable to remove prefix, split into array by spaces
const args = message.content.slice(prefix.length).trim().split(' ');
    // create command variable calling args.shift()
const command = args.shift().toLowerCase();

if (message.content === '!ping') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Pong.');
        // send back "Boop" 
} else if (message.content.startsWith(`${prefix}beep`))
    message.channel.send('Boop.');
        // send back server name
else if (message.content === `${prefix}server`) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
      }
else if (message.content === `${prefix}user-info`) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    }
else if (message.content.startsWith(`${prefix}food`)) {
        // order food
        message.channel.send('Are you sure?');
        message.react("✅")
        client.on('messageReactionAdd', (reaction, user) => {
            if(reaction.emoji.name === "✅") {
                console.log(reaction.users);

            
            //
        });
}

if (message.author.username == "bug")
    message.react("💰")

else if (message.author.username == "Arclaw")
    message.react(":poop:")
})






