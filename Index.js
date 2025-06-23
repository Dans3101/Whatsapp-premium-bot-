const venom = require('venom-bot');

venom
  .create()
  .then((client) => start(client))
  .catch((err) => console.log(err));

function start(client) {
  client.onMessage(async (message) => {
    if (message.body === 'hi' && !message.isGroupMsg) {
      await client.sendText(message.from, 'Hello! 👋 I’m your premium WhatsApp bot.');
    }
  });
}
