const { emojis } = require("../../../../config");
module.exports = {
  count: () =>
    `${emojis.error} | You must specify a number of messages to delete!`,
  noMemberFound: () => `${emojis.error} | Please mention a member!`,
  success: (user, amount) =>
    `${emojis.success} | **${--amount}** messages from **${
      user.tag
    }** deleted!`,
};
