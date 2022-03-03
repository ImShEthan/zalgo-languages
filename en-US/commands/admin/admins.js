const { emojis } = require("../../../../config");
module.exports = {
  title: (members) => `List of administrators - (${members})`,

  selectMenu: {
    title: () => `Show more details`,
    firstOption: () => `Show status`,
    secondOption: () => `Show certified bots`,
    thirdOption: () => `Show whitelist members and owners`,
  },
};
