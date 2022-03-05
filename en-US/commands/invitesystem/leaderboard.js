const { emojis } = require("../../../../config");
module.exports = {
  wait: () => `${emojis.loading} | Retrieving information...`,
  noData: () => `${emojis.error} | No invitation found!`,
  desc: (lb, user, member) =>
    `${lb} **${user.tag}** - **${member.calculatedInvites}** invitations\n`,
  title: () => `Ranking of invitations`,
  pos: (pos) => {
        if (pos === 1) {
          return `You are ${pos}st in the leaderboard.`;
        } else if (pos === 2) {
          return `You are ${pos}nd in the leaderboard.`;
        } else if (pos === 3) {
          return `You are ${pos}rd in the leaderboard.`;
        }
        else return`You are ${pos}th in the leaderboard.`;
  },
};
