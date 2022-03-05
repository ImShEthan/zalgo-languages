const { emojis } = require("../../../../config");
module.exports = {
  nourl: () => `${emojis.error} | Please enter the url of the emoji!`,
  noname: () => `${emojis.error} | Please enter the name of the emoji!`,
  success: (name, string, emote) =>
    `${emote} Emoji **${name}** added to the server ! \`${string}\``,
  error: () =>
    `${emojis.error} | You have no more storage on your server!`,

  errorMultiple: () => `Please enter an emoji!`,
};
