const { emojis } = require("../../../../config");
module.exports = {
  desc: (data) => `
**1)** __Anti Mass Join: __
${
  data.enabled
    ? "<:enabled_mys:797495648421281822> Activé"
    : "<:disabled_mys:797495585480638464> Désactivé"
}

**2)** **${
    data.maxmembers
  }** membres maximum pourront rejoindre le serveur en 10 secondes

**3)** __Expulser les nouveaux membres tant que le serveur n 'aura pas désactivé la protection__:
${
  data.raid
    ? "<:enabled_mys:797495648421281822> Oui"
    : "<:disabled_mys:797495585480638464> Non"
}

**4)** __Etat de la protection: __
${
  data.raidmode
    ? "<:enabled_mys:797495648421281822> Serveur fermé"
    : "<:disabled_mys:797495585480638464> Serveur ouvert"
}`,

  question: () =>
    `Combien de membres pourront rejoindre le serveur en 10 secondes ?`,
  error: () => `Chiffre invalide !`,
  lock: (message) =>
    `Le serveur est maintenant **fermé** par ${message.author.tag}`,
  unlock: (message) =>
    `Le serveur est maintenant **ouvert** par ${message.author.tag}`,

  msgKick: () =>
    `Le serveur est actuellement fermé car trop de membres ont rejoint en peu de temps ! Réessayez de rejoindre plus tard.`,
  reasonKick: () =>
    `Le serveur est actuellement fermé car trop de membres ont rejoint en peu de temps !`,
  msg: () =>
    `Le serveur est maintenant **fermé** car trop de membres ont rejoint en peu de temps.`,
};
