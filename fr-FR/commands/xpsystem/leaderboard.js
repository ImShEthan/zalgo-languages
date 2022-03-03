const { emojis } = require("../../../../config");
module.exports = {
  wait: () => `${emojis.loading} | Récupération des informations...`,
  nothingFound: () => `${emojis.error} | Aucun level trouvé !`,
  desc: (lb, user, member) =>
    `${lb} ● **${user.tag}** ● **${member.level}** levels, il reste **${
      member.levelxp - member.xp
    }** xp's pour atteindre le level **${member.level + 1}**.\n`,
  leaderboard: () => "Classement des levels",
};
