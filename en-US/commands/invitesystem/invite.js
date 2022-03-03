const { emojis } = require("../../../../config");
module.exports = {
  desc: (member, memberData, message, calc) => `${
    member.id === message.member.id ? `Tu as` : `**${member.user.username}** a`
  } **${calc}** invitations. 

**${memberData.invites}** invitations normales.
**${memberData.bonus}** invitations bonus.
**${
    memberData.fake > 0 ? `-${memberData.fake}` : `${memberData.fake}`
  }** invitations fakes.
**${
    memberData.leaves > 0 ? `-${memberData.leaves}` : `${memberData.leaves}`
  }** invitations leaves.

`,
};
