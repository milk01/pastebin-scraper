const Discord = require('discord.js');
const client = new Discord.Client();

const { token } = require('./config.json');
const scraper = require('./index.js');

console.log('Now listening for messages.')

client.on('message', async (message) => {
    if (message.content.includes("https://pastebin.com/")) {
        let pasteId = message.content.split("https://pastebin.com/")[1];
        console.log(pasteId);
        scraper.getPasteText(pasteId).then((body) => {
          console.log(`Body: ${body}`);
          message.channel.send(`Paste content: ${body}`);
        }).catch ((err) => {
          console.log(`Error Getting Response`);
        });
    }
});

client.login(token);