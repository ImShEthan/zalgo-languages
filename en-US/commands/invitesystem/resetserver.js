const { emojis } = require("../../../../config");
module.exports = {
  loading: () => `${emojis.loading} | Reset current invitations...`,
  success: () => `${emojis.success} | Reset completed!`,
};
