const { emojis } = require("../../../../config");
module.exports = {
  title: (members) => `Bots list - (${members})`,

  selectMenu: {
    title: () => `View more details`,
    firstOption: () => `View status`,
  },
};
