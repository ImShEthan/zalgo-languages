const { emojis } = require("../../../../config");
module.exports = {
  wait: () => `${emojis.loading} | Retrieving information...`,
  nothingFound: () => `${emojis.error} | No level found !`,
  desc: (lb, user, member) =>
    `${lb} ● **${user.tag}** ● **${member.level}** levels, it remains **${
      member.levelxp - member.xp
    }** xp's to reach the level **${member.level + 1}**.\n`,
  leaderboard: () => "Ranking of the levels",
};
// d