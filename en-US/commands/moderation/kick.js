const { emojis } = require("../../../../config");
module.exports = {
  userNotFound: () =>
    `${emojis.error} | Cette personne n'est pas présente sur ce serveur !`,
  userIsYou: () =>
    `${emojis.error} | Vous ne pouvez pas vous sanctionner vous-même !`,
  youCantKick: () =>
    `${emojis.error} | Vous ne pouvez pas kick cette personne !`,
  userInWl: () =>
    `${emojis.error} | Cette personne est dans la whitelist et ne peut pas être kick !`,

  noReason: () => `pas de raison donnée`,

  success: (member) => member.user.tag + " a été kick !",
  desc: () => `**Raison:**`,
  mod: () => `Modérateur:`,

  util: () => `Utilisateur :`,
  reason: () => `Raison`,

  num: () => `Nombres de sanctions:`,

  error: () =>
    `${emojis.error} | Une erreur est survenue ! Veuillez vérifier que je sois au dessus de la personne !`,
};
