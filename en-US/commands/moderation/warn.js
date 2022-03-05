const { emojis } = require("../../../../config");
module.exports = {
  userNotFound: () =>
    `${emojis.error} | This user is not on this server!`,
  userIsBot: () => `${emojis.error} | This user is a bot!`,
  userIsYou: () =>
    `${emojis.error} | You can't punish yourself!`,
  youCantWarn: () =>
    `${emojis.error} | You can't warn this user!`,
  userInWl: () =>
    `${emojis.error} | This user is in the whitelist and can't be warned!`,

  noReason: () => `${emojis.error} | Please enter a reason!`,

  util: () => `User :`,
  mod: () => `Moderator`,
  reason: () => `Reason`,

  num: () => `Number of sanctions:`,

  userSend: (message, reason) =>
    `You have just been warned on **${message.guild.name}** by **${message.author.tag}** for **${reason}** !`,
  title: (member) => member.user.tag + " has received a warning!",
  desc: () => `**Reason:**`,
  moderator: () => `Moderator:`,
};
