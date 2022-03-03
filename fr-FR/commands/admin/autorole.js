const { emojis } = require("../../../../config");
module.exports = {
  mainEmbedDescription: (data, message) => `
__**1)** Ajouter un rôle__

__**2)** Retirer un rôle__

__**3)** Attendre que l'utilisateur accepte les règles du serveur avant d'attribuer les rôles.__
${data.waitrules ? `${emojis.enabled} Oui` : `${emojis.disabled} Non`}

__**Rôles:**__
${
  data.roles.length > 0
    ? data.roles
        .map((x) => message.guild.roles.cache.get(x))
        .slice(0, 2)
        .join(", ")
    : "Aucun rôle"
}
          `,
  sendRole: () => "Veuillez envoyer le rôle que les membres recevront !",
  removeRole: () =>
    "Veuillez envoyer le rôle que les membres ne recevront plus !",
  roleNotFound: () => "Rôle non trouvé",
  roleRemoved: () => `Rôle retiré`,
  max5roles: () =>
    `Vous ne pouvez mettre que maximum 5 rôles dans les rôles ayant accès aux tickets !`,
  roleAdded: () => `Rôle ajouté`,
};
