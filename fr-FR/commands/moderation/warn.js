const { emojis } = require("../../../../config");
module.exports = {
  userNotFound: () =>
    `${emojis.error} | Cette personne n'est pas présente sur ce serveur !`,
  userIsBot: () => `${emojis.error} | Cet utilisateur est un bot !`,
  userIsYou: () =>
    `${emojis.error} | Vous ne pouvez pas vous sanctionner vous-même !`,
  youCantWarn: () =>
    `${emojis.error} | Vous ne pouvez pas warn cette personne !`,
  userInWl: () =>
    `${emojis.error} | Cette personne est dans la whitelist et ne peut pas être warn !`,

  noReason: () => `${emojis.error} | Veuillez entrer une raison !`,

  util: () => `Utilisateur :`,
  mod: () => `Modérateur`,
  reason: () => `Raison`,

  num: () => `Nombres de sanctions:`,

  userSend: (message, reason) =>
    `Vous venez d'être averti sur **${message.guild.name}** par **${message.author.tag}** pour **${reason}** !`,
  title: (member) => member.user.tag + " a reçu un avertissement !",
  desc: () => `**Raison:**`,
  moderator: () => `Modérateur:`,
};
