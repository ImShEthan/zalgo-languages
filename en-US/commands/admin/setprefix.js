const { emojis } = require("../../../../config");
module.exports = {
  missing: () => `${emojis.error} | You must write a prefix!`,
  success: () => `${emojis.success} | The server prefix has been updated!`,
};
