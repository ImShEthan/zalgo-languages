const { emojis } = require("../../../../config");
module.exports = {
  missing: () => `${emojis.error} | Vous devez écrire un préfixe !`,
  success: () => `${emojis.success} | Le préfixe du serveur a été mis à jour !`,
};
