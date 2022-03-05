const { emojis } = require("../../../../config");
module.exports = {
  errors: {
    inviteCount: {
      missing: (prefix) =>
        `${emojis.error} | You must write the number of levels needed to obtain the grade. (Syntax : ${prefix}addrank-level nomber @role)`,
      incorrect: (prefix) =>
        `${emojis.error} | You must write a __**valid**__ number of levels needed to obtain the grade. (Syntax : ${prefix}addrank-level nomber @role)`,
      alreadyExists: (prefix, rank, role) =>
        `${emojis.error} | There is already a role defined for **${rank.level}** levels (\`@${role.name}\`)! Remove it with \`${prefix}removerank-level ${role.id}\` then try again!`,
    },
    role: {
      missing: (prefix) =>
        `${emojis.error} | You must mention the role you want to add when the level is reached. (Syntax : ${prefix}addrank-level nomber @role)`,
      alreadyExists: (prefix, rank, role) =>
        `${emojis.error} | his role is already used as a reward for the **${rank.level}** levels ! Remove it with  \`${prefix}removerank-level ${role.id}\` then try again!`,
      perm: (role) =>
        `${emojis.error} | My role is not high enough to add the role \`@${role.name}\` to member ! Please up my role and try again !`,
    },
  },
};
