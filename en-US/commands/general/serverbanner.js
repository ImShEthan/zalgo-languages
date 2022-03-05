const { emojis } = require("../../../../config");
module.exports = {
  error: () => `${emojis.error} | This server does not have a banner!`,
};
