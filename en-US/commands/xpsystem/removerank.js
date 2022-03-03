const { emojis } = require("../../../../config");
module.exports = {
  errors: {
    role: {
      missing: (prefix) =>
        `${emojis.error} | Vous devez mentionner le rôle que vous souhaitez retirer. (Syntaxe : ${prefix}removerank-level @role)`,
      doesntExist: () =>
        `${emojis.error} | Ce rôle n'est pas utilisé pour les récompenses !`,
    },
  },
  title: () => `Rôle retiré`,
  field: (prefix, role, inviteCount) =>
    `Rôle retiré des récompenses. Les membres ne le recevront plus lorsqu'ils atteindront les **${inviteCount}** levels.`,
};
