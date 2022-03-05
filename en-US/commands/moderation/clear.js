const { emojis } = require("../../../../config");
module.exports = {
  count: () =>
    `${emojis.error} | You must specify a number of messages to delete!`,
  success: (amount) =>
    `${emojis.success} | **${--amount}** messages deleted!`,
};
