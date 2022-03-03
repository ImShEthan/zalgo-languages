const { emojis } = require("../../../../config");
module.exports = {
  userNotFound: () =>
    `${emojis.error} | Cette personne n'est pas présente sur ce serveur !`,
  success: (member) => `${emojis.success} | ${member} a été unmute !`,
};
