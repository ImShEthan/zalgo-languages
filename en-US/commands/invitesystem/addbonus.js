const { emojis } = require("../../../../config");
module.exports = {
  noArgs: () => `${emojis.error} | Vous devez entrer un bonus à ajouter !`,
  invalid: () => `${emojis.error} | Veuillez entrer un chiffre valide !`,
  memberNotFound: () =>
    `${emojis.error} | Cet utilisateur n'est pas sur le serveur !`,
  success: (bonus, member) =>
    `**${bonus}** invitations bonus ont été rajoutées à ${member.user.tag} !`,
};
