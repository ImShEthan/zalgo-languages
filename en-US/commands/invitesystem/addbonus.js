const { emojis } = require("../../../../config");
module.exports = {
  noArgs: () => `${emojis.error} | You must enter a bonus to add!`,
  invalid: () => `${emojis.error} | Please enter a valid number!`,
  memberNotFound: () =>
    `${emojis.error} | This user is not on the server!`,
  success: (bonus, member) =>
    `**${bonus}** bonus invitations have been added to ${member.user.tag} !`,
};
