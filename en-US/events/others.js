const { emojis } = require("../../../config");
module.exports = {
  blacklist: {
    reason: () => `Blacklist du serveur.`,
    msg: (user) => `${user.tag} est blacklist ! Je l'ai donc ban.`,
  },
  mute: {
    msg: (member) =>
      `${member} a rejoins le serveur alors qu'il était mute, il a été remute !`,
  },
  antiemojis: {
    reason: () => `Message contenant trop d'émojis.`,
    util: () => `Utilisateur :`,
    reason1: () => `Raison`,
    reason2: () => `**Raison:**`,
    msg: (message) => message.author.tag + " a reçu un avertissement !",
  },
  antimention: {
    reason: () => `Message contenant trop de mentions.`,
    util: () => `Utilisateur :`,
    reason1: () => `Raison`,
    reason2: () => `**Raison:**`,
    msg: (message) => message.author.tag + " a reçu un avertissement !",
  },
  antimaj: {
    reason: () => `Message contenant trop de majuscules.`,
    util: () => `Utilisateur :`,
    reason1: () => `Raison`,
    reason2: () => `**Raison:**`,
    msg: (message) => message.author.tag + " a reçu un avertissement !",
  },
  antidiscordlinks: {
    reason: () => `Envoie d'un lien d'invitation Discord.`,
    util: () => `Utilisateur :`,
    reason1: () => `Raison`,
    reason2: () => `**Raison:**`,
    msg: (message) => message.author.tag + " a reçu un avertissement !",
  },
  antilinks: {
    reason: () => `Envoie d'un lien.`,
    util: () => `Utilisateur :`,
    reason1: () => `Raison`,
    reason2: () => `**Raison:**`,
    msg: (message) => message.author.tag + " a reçu un avertissement !",
  },
  ban: {
    noReason: () => `pas de raison donnée`,
    success1: (user) => user.tag + " a été banni !",
    success: (user) => user.tag + " a été banni !",
    desc: () => `**Raison:**`,
    mod: () => `Modérateur:`,

    util: () => `Utilisateur :`,
    reason: () => `Raison`,

    num: () => `Nombres de sanctions:`,
  },
  kick: {
    noReason: () => `pas de raison donnée`,

    success: (member) => member.user.tag + " a été kick !",
    desc: () => `**Raison:**`,
    mod: () => `Modérateur:`,

    util: () => `Utilisateur :`,
    reason: () => `Raison`,

    num: () => `Nombres de sanctions:`,
  },

  mute: {
    success: (tomute) => tomute.user.tag + " a été mute !",
    desc: (reason, time, message) =>
      `**Raison:** ${reason}\n**Durée:** ${
        time ? message.language.convertMs(time) : "Infini"
      }`,
    moderator: () => `Modérateur:`,
  },
  warn: {
    util: () => `Utilisateur :`,
    mod: () => `Modérateur`,
    reason: () => `Raison`,

    num: () => `Nombres de sanctions:`,

    userSend: (message, reason) =>
      `Vous venez d'être averti sur **${message.guild.name}** par **${message.author.tag}** pour **${reason}** !`,
    title: (member) => member.user.tag + " a reçu un avertissement !",
    desc: () => `**Raison:**`,
    moderator: () => `Modérateur:`,
  },
};
