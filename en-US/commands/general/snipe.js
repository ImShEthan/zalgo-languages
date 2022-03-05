const { emojis } = require("../../../../config");
module.exports = {
  noFoundMessage: () => `${emojis.error} | No messages found!`,

  and: () => `***and more...***`,

  embeds: () => `Message embeds:`,
};
