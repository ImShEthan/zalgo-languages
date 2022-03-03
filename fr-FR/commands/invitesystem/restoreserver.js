const { emojis } = require("../../../../config");
module.exports = {
  loading: () => `${emojis.loading} | Restauration des invitations en cours...`,
  success: () => `${emojis.success} | Invitations restaurés effectué !`,
};
