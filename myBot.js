//Get discord.js
const Discord = require('discord.js');

//Create client instance as bot
const botRem = new Discord.Client();

//Set listener on 'ready'
botRem.on('ready', () => {
  console.log('Haru ready!');
});

//Set listener on 'message'
botRem.on('message', message => {
  if (message.content === 'สร้าง Meet') {
    message.reply('@here https://meet.google.com/bbk-tzmg-jbc ห้อง Meet ครับ');
  }
  if (message.content === 'สร้าง meet') {
    message.reply('@here https://meet.google.com/bbk-tzmg-jbc ห้อง Meet ครับ');
  }
  if (message.content === 'Meet please') {
    message.reply('@here https://meet.google.com/bbk-tzmg-jbc ห้อง Meet ครับ');
  }
  if (message.content === 'meet please') {
    message.reply('@here https://meet.google.com/bbk-tzmg-jbc ห้อง Meet ครับ');
  }
});

botRem.login('NjE5MDM2OTkxNzk0ODM5NTYy.XXCZjw.rLJGCA2CUZdd2cOBVP0Mya_oQXw');
