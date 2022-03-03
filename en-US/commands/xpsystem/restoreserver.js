const { emojis } = require("../../../../config");
module.exports = {
  wait: () => `${emojis.loading} | Restauration des levels en cours...`,
  success: () => `${emojis.success} | Levels restaurés avec succès !`,
};
