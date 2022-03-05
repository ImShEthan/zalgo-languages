const { emojis } = require("../../../../config");
module.exports = {
  userNotFound: () =>
    `${emojis.error} | This user is not on this server!`,
  success: (member) => `${emojis.success} | ${member} has been unmuted!`,
};
