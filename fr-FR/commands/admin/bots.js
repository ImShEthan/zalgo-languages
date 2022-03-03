const { emojis } = require("../../../../config");
module.exports = {
  title: (members) => `Liste des bots - (${members})`,

  selectMenu: {
    title: () => `Afficher plus de détails`,
    firstOption: () => `Afficher les statuts`,
  },
};
