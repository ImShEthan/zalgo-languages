const { emojis } = require("../../../../config");
module.exports = {
  errors: {
    role: {
      missing: (prefix) =>
        `${emojis.error} | You must mention the role you wish to remove. (Syntax : ${prefix}removerank-level @role)`,
      doesntExist: () =>
        `${emojis.error} | This role is not used for rewards !`,
    },
  },
  title: () => `Role removed`,
  field: (prefix, role, inviteCount) =>
    `Role removed from the rewards. Members will no longer receive it when they reach the **${inviteCount}** levels.`,
};
//d