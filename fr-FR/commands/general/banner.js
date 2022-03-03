const { emojis } = require("../../../../config");
module.exports = {
  nofind: () => `Utilisateur introuvable !`,
  nofindBanner: (user) => `${user.tag} n'a pas de bannière !`,
  desc: (user) => `Bannière de ${user.tag} (${user.id})`,
};
