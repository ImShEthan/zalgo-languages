const { emojis } = require("../../../../config");
module.exports = {
  idNotFound: () => `${emojis.error} | Veuillez entrer une ID valide !`,
  userNotFound: (args) =>
    `${emojis.error} | Aucun utilisateur sur Discord ne possède l'ID \`${args[0]}\` !`,
  notBan: (user) => `${emojis.error} | **${user.tag}** n'est pas banni !`,
  success: (user, message) =>
    `${emojis.success} | **${user.tag}** vient d'être débanni de **${message.guild.name}** !`,
};
