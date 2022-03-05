const { emojis } = require("../../../../config");
module.exports = {
  userNotFound: () => `${emojis.error} | User not found!`,
  userIsYou: () =>
    `${emojis.error} | You can't punish yourself!`,
  youCantBan: () => `${emojis.error} | You can't ban this user!`,
  userInWl: () =>
    `${emojis.error} | This user is in the whitelist and can't be banned!`,

  noReason: () => `no reason given`,
  success1: (user) => user.tag + " has been banned !",
  success: (user) => user.tag + " has been banned !",
  desc: () => `**Reason:**`,
  mod: () => `Moderator:`,

  util: () => `User :`,
  reason: () => `Reason`,

  num: () => `Number of sanctions:`,

  error: () =>
    `${emojis.error} | An error has occurred! Please check that I am above the user!`,
};
