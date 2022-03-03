const { emojis } = require("../../../config");
module.exports = {
  missingPerms: (neededPermissions) =>
    `__**${
      emojis.error
    } Permissions manquantes**__\n\nJ'ai besoin des permissions suivantes pour le bon fonctionnement de cette commande: ${neededPermissions
      .map((p) => "`" + p + "`")
      .join(", ")}`,
  disabled: () =>
    `${emojis.error} | Cette commande est actuellement désactivée !`,
  permLevel: (name) =>
    `${emojis.error} | Cette commande nécessite le niveau d'autorisation : \`${name}\`!`,
  sendPerm: () =>
    `${emojis.error} | Je n'ai pas la permission d'envoyer des messages dans ce salon !`,
  noFoundChannel: () => `Ce salon est introuvable !`,
};
