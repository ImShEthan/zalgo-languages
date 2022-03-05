const { emojis } = require("../../../../config");
module.exports = {
  userNotFound: () =>
    `${emojis.error} | This user is not present on this server!`,
  userIsYou: () =>
    `${emojis.error} | You can't punish yourself!`,
  youCantKick: () =>
    `${emojis.error} | You can't kick this user!`,
  userInWl: () =>
    `${emojis.error} | This user is in the whitelist and can't be kicked!`,

  noReason: () => `no reason given`,

  success: (member) => member.user.tag + " has been kicked !",
  desc: () => `**Reason:**`,
  mod: () => `Moderator:`,

  util: () => `User :`,
  reason: () => `Reason`,

  num: () => `Number of sanctions:`,

  error: () =>
    `${emojis.error} | An error has occurred! Please check that I am above the user!`,
};
