const { emojis } = require("../../../../config");
module.exports = {
  mainEmbedDescription: (data, message) => `
__**1)** Add a role__

__**2)** Remove a role__

__**3)** Wait for the user to accept the server rules before adding the roles.__
${data.waitrules ? `${emojis.enabled} Yes` : `${emojis.disabled} No`}

__**Roles:**__
${
  data.roles.length > 0
    ? data.roles
        .map((x) => message.guild.roles.cache.get(x))
        .slice(0, 2)
        .join(", ")
    : "No role."
}
          `,
  sendRole: () => "Please send the role that members will be given!",
  removeRole: () =>
    "Please send the role that members will no longer to receive!",
  roleNotFound: () => "Role not found",
  roleRemoved: () => `Role removed`,
  max5roles: () =>
    `You can only add a maximum of 5 roles to the roles!`,
  roleAdded: () => `Role added`,
};
