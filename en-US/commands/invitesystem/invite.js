const { emojis } = require("../../../../config");
module.exports = {
  desc: (member, memberData, message, calc) => `${
    member.id === message.member.id ? `You have` : `**${member.user.username}** has`
  } **${calc}** invitations. 

**${memberData.invites}** regular invitations.
**${memberData.bonus}** bonus invitations.
**${
    memberData.fake > 0 ? `-${memberData.fake}` : `${memberData.fake}`
  }** fake invitations.
**${
    memberData.leaves > 0 ? `-${memberData.leaves}` : `${memberData.leaves}`
  }** leave invitations

`,
};
