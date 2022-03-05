const { emojis } = require("../../../../config");
module.exports = {
  any: () => "No rewards roles",
  desc: (data) =>
    `Do \`${data.guild.prefix}addrank-level\` for configure the rewards roles.`,
  list: () => "List of reward roles :",
  field: (role, rank) => `${role} ● ${rank.level} levels`,
};
