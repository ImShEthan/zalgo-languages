const { emojis } = require("../../../../config");
module.exports = {
  userNotFound: () => `${emojis.error} | Utilisateur introuvable !`,
  userIsYou: () =>
    `${emojis.error} | Vous ne pouvez pas vous sanctionner vous-même !`,
  youCantBan: () => `${emojis.error} | Vous ne pouvez pas ban cette personne !`,
  userInWl: () =>
    `${emojis.error} | Cette personne est dans la whitelist et ne peut pas être ban !`,

  noReason: () => `pas de raison donnée`,
  success1: (user) => user.tag + " a été banni !",
  success: (user) => user.tag + " a été banni !",
  desc: () => `**Raison:**`,
  mod: () => `Modérateur:`,

  util: () => `Utilisateur :`,
  reason: () => `Raison`,

  num: () => `Nombres de sanctions:`,

  error: () =>
    `${emojis.error} | Une erreur est survenue ! Veuillez vérifier que je sois au dessus de la personne !`,
};
