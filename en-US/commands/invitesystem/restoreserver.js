const { emojis } = require("../../../../config");
module.exports = {
  loading: () => `${emojis.loading} | Restore current invitations...`,
  success: () => `${emojis.success} | Restored invitations completed!`,
};
