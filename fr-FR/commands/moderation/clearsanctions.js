const { emojis } = require("../../../../config");
module.exports = {
  noMemberFound: () =>
    `${emojis.error} | Veuillez mentionner un membre valide !`,
  isABot: () => `${emojis.error} | Cet utilisateur est un bot !`,
  success: () => `${emojis.success} | Sanctions supprimées !`,
};
