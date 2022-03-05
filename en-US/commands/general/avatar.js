const { emojis } = require("../../../../config");
module.exports = {
  nofind: () => `User not found!`,
  desc: (member) => `**Discord** avatar of ${member.user.tag} (${member.id}) :`,
  desc1: (member) =>
    `**Server** avatar of ${member.user.tag} (${member.id}) :`,
};
