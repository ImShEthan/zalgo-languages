const { emojis } = require("../../../../config");
module.exports = {
  noChange: () =>
    `${emojis.error} | This server has never changed its name!`,
  total: () => `Total of old names:`,
};
