const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.js');

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  const string = message.content;
  const array = [];
  const msgArray = string.split(' ');
  if (msgArray[0] === '!mock') {
    for (let i = 6; i < string.length; i++) {
      // console.log(string.charAt(i));
      let letter = string.charAt(i);
      letter = string.charAt(i).toLowerCase();
      if (i % 2 === 0) {
        letter = letter.toUpperCase();
      }
      array.push(letter);
    }
    const reply = array.join('');
    message.channel.send(reply);
  }

});

client.login(auth.token);
