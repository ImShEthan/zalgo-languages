const { emojis } = require("../../../../config");
module.exports = {
  nofind: () => `Utilisateur introuvable !`,
  desc: (member) => `Avatar **Discord** de ${member.user.tag} (${member.id}) :`,
  desc1: (member) =>
    `Avatar **Serveur** de ${member.user.tag} (${member.id}) :`,
};
