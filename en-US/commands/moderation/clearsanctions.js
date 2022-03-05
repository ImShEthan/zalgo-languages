const { emojis } = require("../../../../config");
module.exports = {
  noMemberFound: () =>
    `${emojis.error} | Please mention a valid member!`,
  isABot: () => `${emojis.error} | This user is a bot!`,
  success: () => `${emojis.success} | Sanctions deleted!`,
};
