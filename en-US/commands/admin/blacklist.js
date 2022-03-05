const { emojis } = require("../../../../config");
module.exports = {
  mainMenu: () => "Blacklist menu:",
  mainOptions: () =>
    `**1)** Add a member to the blacklist\n**2)** Remove a member from the blacklist\n**3)** Delete the blacklist\n**4)** List of blacklisted members`,

  userNotFound: () => "This user cannot be found!",

  userToAdd: () => "Please mention the member to be added to the blacklist",
  alreadyInBlacklist: (user) => `${user.tag} is already in the blacklist!`,
  banUser: (user) => `${user.tag} is blacklisted! So I banned it.`,
  userAdded: (user) => `${user.tag} has been added to the blacklist!`,

  userToRemove: () =>
    "Please mention the member to be removed from the blacklist",
  notYetInBlacklist: () => `This member is not in the blacklist!`,
  unbanUser: (user) => `${user.tag} is unblacklisted! So I have unban.`,
  userRemoved: (user) => `${user.tag} has been removed from the blacklist!`,
};
