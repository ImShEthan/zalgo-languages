const { emojis } = require("../../../../config");
module.exports = {
  noEmojis: () => `No emoji on this server.`,
  title: (message) => `Emojis of ${message.guild.name}`,
};
