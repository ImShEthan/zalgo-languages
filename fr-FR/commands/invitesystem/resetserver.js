const { emojis } = require("../../../../config");
module.exports = {
  loading: () => `${emojis.loading} | Reset des invitations en cours...`,
  success: () => `${emojis.success} | Reset effectué !`,
};
