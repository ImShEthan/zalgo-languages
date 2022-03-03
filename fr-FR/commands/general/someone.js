const { emojis } = require("../../../../config");
module.exports = {
  search: (guild) =>
    `Membre de **${guild.name}** sélectionné lors d'une recherche aléatoire :`,
  username: () => `Nom d'utilisateur:`,
  discri: () => `Discriminateur:`,
  id: () => `ID:`,
  createdat: () => `Créé:`,
  joinedat: () => `Rejoins:`,
  badges: () => `Badges Discord:`,
  nobadges: () => `Aucun badge`,
  again: () => `Nouvelle recherche`,
};
