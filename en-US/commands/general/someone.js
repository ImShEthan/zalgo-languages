const { emojis } = require("../../../../config");
module.exports = {
  search: (guild) =>
    `Member of **${guild.name}** selected in random search:`,
  username: () => `Username:`,
  discri: () => `Discriminator:`,
  id: () => `ID:`,
  createdat: () => `Created on:`,
  joinedat: () => `Join:`,
  badges: () => `Discord Badges:`,
  nobadges: () => `No badges`,
  again: () => `New search`,
};
