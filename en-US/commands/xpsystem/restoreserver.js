const { emojis } = require("../../../../config");
module.exports = {
  wait: () => `${emojis.loading} | Restoration of levels in progress...`,
  success: () => `${emojis.success} | Levels successfully restored !`,
};
