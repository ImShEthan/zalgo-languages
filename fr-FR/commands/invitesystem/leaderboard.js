const { emojis } = require("../../../../config");
module.exports = {
  wait: () => `${emojis.loading} | Récupération des informations...`,
  noData: () => `${emojis.error} | Aucune invitation trouvé !`,
  desc: (lb, user, member) =>
    `${lb} **${user.tag}** - **${member.calculatedInvites}** invitations\n`,
  title: () => `Classement des invitations`,
  pos: (pos) => {
    if (pos === 1) {
      return `Vous êtes ${pos}er dans le classement.`;
    } else return `Vous êtes ${pos}ème dans le classement.`;
  },
};
