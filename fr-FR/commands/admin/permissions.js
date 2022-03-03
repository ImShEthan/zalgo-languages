const { emojis } = require("../../../../config");
module.exports = {
  title: () => "PermissionManager",
  mainEmbedDescription: () => `
**1)** Ajouter un rôle à la permission ** Modérateur **
**2)** Enlever un rôle à la permission ** Modérateur **
**3)** Liste des rôles permission Modérateur
    
__**Les commandes giveaways nécessitent la permission Administrateur.**__
~~**4)** Ajouter un rôle à la permission ** Giveaway **
**5)** Enlever un rôle à la permission ** Giveaway **
**6)** Liste des rôles permission Giveaway~~

**7)** Ajouter un rôle à la permission ** Kick des membres **
**8)** Enlever un rôle à la permission ** Kick des membres **
**9)** Liste des rôles permission Kick des membres

**10)** Ajouter un rôle à la permission **Ban des membres**
**11)** Enlever un rôle à la permission **Ban des membres**
**12)** Liste des rôles permission Ban des membres

**13)** Ajouter un rôle à la permission **Administrateur**
**14)** Enlever un rôle à la permission **Administrateur**
**15)** Liste des rôles permission Administrateur        
      `,
  moderatorRoles: (guildPermissions) =>
    `Rôles modérateurs - (${guildPermissions.moderators.length})`,
  giveawayRoles: (guildPermissions) =>
    `Rôles giveaways - (${guildPermissions.giveaways.length})`,
  kickerRoles: (guildPermissions) =>
    `Rôles Kick des membres - (${guildPermissions.kick.length})`,
  bannerRoles: (guildPermissions) =>
    `Rôles Ban des membres - (${guildPermissions.ban.length})`,
  adminRoles: (guildPermissions) =>
    `Rôles Administrateurs - (${guildPermissions.admins.length})`,
  sendRole: () => "Veuillez mentionner le rôle !",
  roleNotFound: () => "Rôle non trouvé",
  alreadyMod: () => "Le rôle est déjà modérateur !",
  alreadyGiveawayManager: () => "Le rôle est déjà permission Giveaway !",
  alreadyKicker: () => "Le rôle est déjà permission Kick !",
  alreadyBanner: () => "Le rôle est déjà permission Ban !",
  alreadyAdmin: () => "Le rôle est déjà permission Admin !",
};
