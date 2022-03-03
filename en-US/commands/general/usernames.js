const { emojis } = require("../../../../config");
module.exports = {
  userNotFound: () =>
    `${emojis.error} | Cette personne n'est pas sur le serveur ou est introuvable !`,
  noChangeNames: () => `Ce membre n'a encore jamais changé de nom.`,

  total: () => `Total des anciens noms :`,
};
