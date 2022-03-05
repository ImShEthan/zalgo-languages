const { emojis } = require("../../../config");
module.exports = {
  add: () => `Add the role`,
  remove: () => `Delete the role`,
  title: (button) => `By clicking on the button ${button.name}:`,
  desc: (rolesAdded, rolesRemoved) =>
    `Added roles: ${rolesAdded.length}\nDeleted roles: ${rolesRemoved.length}`,
  successAdded: () => `Role successfully added!`,
  successRemoved: () => `Role successfully removed!`,
  successAdded1: () => `Roles successfully added`,
  successRemoved1: () => `Roles successfully removed!!`,
};
