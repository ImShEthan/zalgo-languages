const { emojis } = require("../../../../config");
module.exports = {
  title: (members) => `Liste des administrateurs - (${members})`,

  selectMenu: {
    title: () => `Afficher plus de détails`,
    firstOption: () => `Afficher les statuts`,
    secondOption: () => `Afficher les bots vérifiés`,
    thirdOption: () => `Afficher les membres whitelist et owners`,
  },
};
