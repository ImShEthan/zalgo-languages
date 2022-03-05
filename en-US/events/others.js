const { emojis } = require("../../../config");
module.exports = {
  blacklist: {
    reason: () => `Blacklist of the server.`,
    msg: (user) => `${user.tag} is blacklisted ! I have banned him.`,
  },
  mute: {
    msg: (member) =>
      `${member} join the server being muted, he got muted !`,
  },
  antiemojis: {
    reason: () => `Message with too many emojis.`,
    util: () => `User :`,
    reason1: () => `Raison`,
    reason2: () => `**Reason:**`,
    msg: (message) => message.author.tag + " received a warn !",
  },
  antimention: {
    reason: () => `Message with too many mentions.`,
    util: () => `User :`,
    reason1: () => `Reason`,
    reason2: () => `**Reason:**`,
    msg: (message) => message.author.tag + " received a warn !",
  },
  antimaj: {
    reason: () => `Message with too many uppercases.`,
    util: () => `User :`,
    reason1: () => `Reason`,
    reason2: () => `**Reason:**`,
    msg: (message) => message.author.tag + " received a warn !",
  },
  antidiscordlinks: {
    reason: () => `Sending a Discord invitation link.`,
    util: () => `User :`,
    reason1: () => `Reason`,
    reason2: () => `**Reason:**`,
    msg: (message) => message.author.tag + " received a warn !",
  },
  antilinks: {
    reason: () => `Send a link.`,
    util: () => `User :`,
    reason1: () => `Reason`,
    reason2: () => `**Reason:**`,
    msg: (message) => message.author.tag + " received a warn !",
  },
  ban: {
    noReason: () => `no reason given`,
    success1: (user) => user.tag + " has been banned !",
    success: (user) => user.tag + " has been banned !",
    desc: () => `**Reason:**`,
    mod: () => `Moderator:`,

    util: () => `User :`,
    reason: () => `Reason`,

    num: () => `Number of sanctions:`,
  },
  kick: {
    noReason: () => `no reason given`,

    success: (member) => member.user.tag + " has been kicked !",
    desc: () => `**Reason:**`,
    mod: () => `Moderator:`,

    util: () => `User :`,
    reason: () => `Reason`,

    num: () => `Number of sanctions:`,
  },

  mute: {
    success: (tomute) => tomute.user.tag + " has been muted !",
    desc: (reason, time, message) =>
      `**Reason:** ${reason}\n**Duration:** ${
        time ? message.language.convertMs(time) : "Infiny"
      }`,
    moderator: () => `Moderator:`,
  },
  warn: {
    util: () => `User :`,
    mod: () => `Moderator`,
    reason: () => `Reason`,

    num: () => `Number of sanctions:`,

    userSend: (message, reason) =>
      `You have just been warned on **${message.guild.name}** by **${message.author.tag}** for **${reason}** !`,
    title: (member) => member.user.tag + " received a warn !",
    desc: () => `**Reason:**`,
    moderator: () => `Moderator:`,
  },
};
