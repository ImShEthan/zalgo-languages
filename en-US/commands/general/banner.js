const { emojis } = require("../../../../config");
module.exports = {
  nofind: () => `User not found!`,
  nofindBanner: (user) => `${user.tag} has no banner!`,
  desc: (user) => `Banner of ${user.tag} (${user.id})`,
};
