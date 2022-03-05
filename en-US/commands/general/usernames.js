const { emojis } = require("../../../../config");
module.exports = {
  userNotFound: () =>
    `${emojis.error} | This person is not on the server or cannot be found!`,
  noChangeNames: () => `This member has never changed their name before.`,

  total: () => `Total old names:`,
};
