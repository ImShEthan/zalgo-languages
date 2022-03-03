const { emojis } = require("../../../../config");
module.exports = {
  noHere: () =>
    `${emojis.error} | Cette personne n'est pas présente sur ce serveur !`,
  cantCreateImage: (prefix) =>
    `${emojis.error} | Impossible de créer l'image ! Faites \`${prefix}reset-card\` pour que je puisse créer l'image correctement.`,
};
