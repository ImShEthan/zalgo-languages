const { emojis } = require("../../../config");
module.exports = {
  missingPerms: (neededPermissions) =>
    `__**${
      emojis.error
    } Missing permissions**__\n\nI need the following permission: ${neededPermissions
      .map((p) => "`" + p + "`")
      .join(", ")}`,
  disabled: () =>
    `${emojis.error} | This command is currently disable !`,
  permLevel: (name) =>
    `${emojis.error} | This command require this permission level : \`${name}\`!`,
  sendPerm: () =>
    `${emojis.error} | I can't send message is this channel !`,
  noFoundChannel: () => `I can't send this channel !`,
};
