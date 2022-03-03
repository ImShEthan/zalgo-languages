const { emojis } = require("../../../../config");
module.exports = {
  noEmojis: () => `Aucun émoji sur ce serveur.`,
  title: (message) => `Emojis de ${message.guild.name}`,
};
