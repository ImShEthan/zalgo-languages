const { emojis } = require("../../../../config");
module.exports = {
  questionTime: () =>
    `Veuillez entrer le temps au quel le message sera supprimé !`,
  invalidTimes: () =>
    `${emojis.error} | Vous devez entrer un temps valide ! Unités valides : \`s\`, \`m\`, \`h\`, \`d\`, \`w\`, \`y\``,
  desc: (message, guildData, formattedMessage) => `
**1)** __Messages d'arrivé__
${
  guildData.enabled
    ? `${emojis.enabled} Activé`
    : `${emojis.disabled} Désactivé`
}

**2)** __Salon des messages d'arrivé__
${
  guildData.channel
    ? message.guild.channels.cache.get(guildData.channel)
      ? message.guild.channels.cache.get(guildData.channel)
      : "Aucun salon."
    : "Aucun salon."
}

**3)** __Message__
${
  guildData.message
    ? guildData.message.length > 800
      ? guildData.message.slice(0, 800) + "** et plus...**"
      : guildData.message
    : "Aucun message."
}

**4)** __Supprimer le message__
${
  guildData.deletemessage
    ? "Au bout de " + message.language.convertMs(guildData.deletemessage)
    : "Non"
}


__**Preview:**__
${formattedMessage !== "** **" ? formattedMessage : "Aucun message."}
`,

  questionChannel: () => `Quel sera le salon des messages d'arrivé ?`,
  questionMessage: () => `Quel sera le message d'arrivé ?`,
  error: () => `Votre message contient trop de caractères !`,
  nofind: () => `Salon introuvable !`,
};
