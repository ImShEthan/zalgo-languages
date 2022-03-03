const { emojis } = require("../../../../config");
module.exports = {
  any: () => "Aucun rôle reward",
  desc: (data) =>
    `Faites \`${data.guild.prefix}addrank-level\` pour configurer un rôle reward.`,
  list: () => "Liste des rôles reward :",
  field: (role, rank) => `${role} ● ${rank.level} levels`,
};
