const { emojis } = require("../../../../config");
module.exports = {
  count: () =>
    `${emojis.error} | Vous devez préciser un nombre de messages à supprimer !`,
  success: (amount) =>
    `${emojis.success} | **${--amount}** messages supprimés !`,
};
