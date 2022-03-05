const { emojis } = require("../../../../config");
module.exports = {
  idNotFound: () => `${emojis.error} | Please enter a valid ID!`,
  userNotFound: (args) =>
    `${emojis.error} | No user on Discord has the ID \`${args[0]}\` !`,
  notBan: (user) => `${emojis.error} | **${user.tag}** is not banned!`,
  success: (user, message) =>
    `${emojis.success} | **${user.tag}** has just been unbanned from **${message.guild.name}** !`,
};
