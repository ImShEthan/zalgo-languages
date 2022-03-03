const { emojis } = require("../../../../config");
module.exports = {
  errors: {
    inviteCount: {
      missing: (prefix) =>
        `${emojis.error} | Vous devez écrire le nombre de levels nécessaires pour obtenir le grade. (Syntaxe : ${prefix}addrank-level nombre @role)`,
      incorrect: (prefix) =>
        `${emojis.error} | Vous devez écrire un nombre __**valide**__ de levels nécessaires pour obtenir le grade. (Syntaxe : ${prefix}addrank-level nombre @role)`,
      alreadyExists: (prefix, rank, role) =>
        `${emojis.error} | Il y a déjà un rôle défini pour **${rank.level}** levels (\`@${role.name}\`) ! Retirez-le avec \`${prefix}removerank-level ${role.id}\` puis réessayez !`,
    },
    role: {
      missing: (prefix) =>
        `${emojis.error} | Vous devez mentionner le rôle que vous souhaitez ajouter quand le level est atteint. (Syntaxe : ${prefix}addrank-level nombre @role)`,
      alreadyExists: (prefix, rank, role) =>
        `${emojis.error} | Ce rôle est déjà utilisé comme récompense pour les **${rank.level}** levels ! Retirez-le avec \`${prefix}removerank-level ${role.id}\` puis réessayez !`,
      perm: (role) =>
        `${emojis.error} | Mon rôle n'est pas assez haut pour ajouter le rôle \`@${role.name}\` aux membres ! Veuillez monter mon rôle puis réessayez !`,
    },
  },
};
