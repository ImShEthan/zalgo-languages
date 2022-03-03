const { emojis } = require("../../../../config");
module.exports = {
  mainMenu: () => "Whitelist menu:",
  mainOptions: () =>
    `**1)** Add a member to the list\n**2)** Remove a member from the list\n**3)** Clear the list\n**4)** List of the whitelist`,

  userNotFound: () => "This user cannot be found!",

  userToAdd: () => "Please mention the member to be added to the list",
  alreadyInBlacklist: (user) => `${user.tag} is already in the list!`,
  userAdded: (user) => `${user.tag} has been added to the list!`,

  userToRemove: () => "Please mention the member to be removed from the list",
  notYetInBlacklist: () => `This person is not in the list!`,
  userRemoved: (user) => `${user.tag} has been removed from the list!`,
};
