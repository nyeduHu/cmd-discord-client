const Discord = require('discord.js');
const client = new Discord.Client();


require('dotenv').config();
const channels = require('./config/config.json').channels
const format = require('./config/config.json').format

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let guild = "";
let mchannel = "";


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`channels:`)
  channels.forEach(ch => {
    console.log(`- ${ch.name}`)
  });

  rl.question('Please choose a channel! >', (ch) => {
    channels.forEach(chn => {
      if(chn.name == ch){
        mchannel = chn.id;
        guild = chn.guild;
      }
    });
  })

});

rl.on('line', (input) => {
  if(input == "exit()") return process.exit(1);
  return sendMessage(input, mchannel);
});



client.on('message', msg => {
  if(msg.channel.id != mchannel) return;
  if(format == "default") return console.log(`${msg.member.user.username}: ${msg.content}`)
});


function sendMessage(input, channelname){
  console.log(channelname)
  let channel = client.guilds.find('name', guild).channels.find('id', channelname)
  return channel.send(input)
};

client.login(process.env.TOKEN);