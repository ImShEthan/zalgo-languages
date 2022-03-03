const { emojis } = require("../../../../config");
module.exports = {
  muteTime: () =>
    `${emojis.error} | Veuillez envoyer un temps minimum de mute ! `,
  error1: (data) =>
    `${emojis.error} | Usage incorrect !\n\n\`${data.guild.prefix}mute @user [time] [reason]\``,
  error2: (data) =>
    `${emojis.error} | Usage incorrect (**C'est vous !**) !\n\n\`${data.guild.prefix}mute @user [time] [reason]\``,
  error3: (data) =>
    `${emojis.error} | Usage incorrect (**Cette personne est au dessus de vous**) !\n\n\`${data.guild.prefix}mute @user [time] [reason]\``,
  error4: (data) =>
    `${emojis.error} | Usage incorrect (**Cette personne est whitelist**) !\n\n\`${data.guild.prefix}mute @user [time] [reason]\``,
  error5: () => `${emojis.error} | Cette personne est déjà mute !`,
  noReason: () => `pas de raison donnée`,

  util: () => `Utilisateur :`,
  mod: () => `Modérateur`,
  reason: () => `Raison`,
  time: () => `Temps`,
  noTime: () => `aucun temps`,
  endAt: () => `Expiration`,
  num: () => `Nombres de sanctions:`,

  success: (tomute) => tomute.user.tag + " a été mute !",
  desc: (reason, time, message) =>
    `**Raison:** ${reason}\n**Durée:** ${
      time ? message.language.convertMs(time) : "Infini"
    }`,
  moderator: () => `Modérateur:`,
};
