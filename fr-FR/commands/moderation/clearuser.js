const { emojis } = require("../../../../config");
module.exports = {
  count: () =>
    `${emojis.error} | Vous devez préciser un nombre de messages à supprimer !`,
  noMemberFound: () => `${emojis.error} | Veuillez mentionner un membre !`,
  success: (user, amount) =>
    `${emojis.success} | **${--amount}** messages de **${
      user.tag
    }** supprimés !`,
};
