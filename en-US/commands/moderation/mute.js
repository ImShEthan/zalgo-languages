const { emojis } = require("../../../../config");
module.exports = {
  muteTime: () =>
    `${emojis.error} | Please send a minimum mute time! `,
  error1: (data) =>
    `${emojis.error} | Incorrect usage!\n\n\`${data.guild.prefix}mute @user [time] [reason]\``,
  error2: (data) =>
    `${emojis.error} | Incorrect usage (**It is you !**) !\n\n\`${data.guild.prefix}mute @user [time] [reason]\``,
  error3: (data) =>
    `${emojis.error} | Incorrect usage (**This member is above you**) !\n\n\`${data.guild.prefix}mute @user [time] [reason]\``,
  error4: (data) =>
    `${emojis.error} | Incorrect usage (**This member is whitelist**) !\n\n\`${data.guild.prefix}mute @user [time] [reason]\``,
  error5: () => `${emojis.error} | This member is already muted!`,
  noReason: () => `no reason given`,

  util: () => `User :`,
  mod: () => `Moderator`,
  reason: () => `Reason`,
  time: () => `Time`,
  noTime: () => `no time`,
  endAt: () => `Expiration date`,
  num: () => `Number of sanctions:`,

  success: (tomute) => tomute.user.tag + " has been muted !",
  desc: (reason, time, message) =>
    `**Reason:** ${reason}\n**Time:** ${
      time ? message.language.convertMs(time) : "Infinity"
    }`,
  moderator: () => `Moderator:`,
};
