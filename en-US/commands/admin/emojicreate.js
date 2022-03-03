const { emojis } = require("../../../../config");
module.exports = {
  nourl: () => `${emojis.error} | Veuillez indiquer l'url de l'émoji !`,
  noname: () => `${emojis.error} | Veuillez indiquer le nom de l'émoji !`,
  success: (name, string, emote) =>
    `${emote} Émoji **${name}** ajouté au serveur ! Chaîne : \`${string}\``,
  error: () =>
    `${emojis.error} | Vous n'avez plus de place sur votre serveur !`,

  errorMultiple: () => `Veuillez entrer un emoji !`,
};
