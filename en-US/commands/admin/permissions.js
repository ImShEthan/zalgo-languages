const { emojis } = require("../../../../config");
module.exports = {
  title: () => "PermissionManager",
  mainEmbedDescription: () => `
**1)** Add a role to the permission ** Moderator **
**2)** Remove a role from the permission ** Moderator **
**3)** List of roles permission Moderator
    
__**Giveaways commands require Administrator permission.**__
~~**4)** Add a role to the permission ** Giveaway **
**5)** Remove a role from the permission ** Giveaway **
**6)** List of permission roles Giveaway~~

**7)** Add a role to the permission ** Kick members **
**8)** Remove a role from the permission ** Kick members **
**9)** List of roles permission Kick members

**10)** Add a role to the permission **Ban members**
**11)** Remove a role from the permission **Ban memberes**
**12)** List of roles permission Ban members

**13)** Add a role to the permission **Administrator**
**14)** Remove a role from the permission **Administrator**
**15)** List of roles permission Administrator        
      `,
  moderatorRoles: (guildPermissions) =>
    `Roles moderators - (${guildPermissions.moderators.length})`,
  giveawayRoles: (guildPermissions) =>
    `Roles giveaways - (${guildPermissions.giveaways.length})`,
  kickerRoles: (guildPermissions) =>
    `Roles Kick members - (${guildPermissions.kick.length})`,
  bannerRoles: (guildPermissions) =>
    `Roles Ban members - (${guildPermissions.ban.length})`,
  adminRoles: (guildPermissions) =>
    `Roles Administrator - (${guildPermissions.admins.length})`,
  sendRole: () => "Please mention the role!",
  roleNotFound: () => "Role not found",
  alreadyMod: () => "The role is already a moderator!",
  alreadyGiveawayManager: () => "The role is already permission Giveaway!",
  alreadyKicker: () => "The role is already permission Kick!",
  alreadyBanner: () => "The role is already permission Ban!",
  alreadyAdmin: () => "The role is already permission Admin!",
};
