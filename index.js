const request = require('request');

let discordBot = require('./discordBot.js');

module.exports = {
  getPasteText: async id => {
    return new Promise((resolve, reject) => {
      try {
        const opts = {
            url: `http://pastebin.com/raw/${id}`,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'
            }
        };
        request.get(opts, (err, response, body) => {
          if (err) {
            reject(err)
          };
          resolve(body)
        });
      }
      catch (err) {
        reject(err);
      }
    });
  }
}