const { emojis } = require("../../../../config");
module.exports = {
  noFoundDesc: () => `Aucune description`,
  name: () => `${emojis.newGeneral} Nom :`,
  id: () => `${emojis.newID} ID :`,
  createdAt: () => `${emojis.poum} Créé le :`,
  owner: () => `${emojis.newOwner} Propriétaire du serveur :`,
  ownerNotFound: () => `Propriétaire introuvable !`,
  boost: () => `${emojis.newBoost} Nombre de boost(s) :`,
  boostDesc: (message) =>
    `\`Boosts: ${
      message.guild.premiumSubscriptionCount
    }\nNiveau: ${message.guild.premiumTier
      .replace("TIER_1", "1")
      .replace("TIER_2", "2")
      .replace("TIER_3", "3")}\``,
  region: () => `${emojis.newStats} Region :`,
  channels: () => `${emojis.text1} Salons :`,
  channelsDesc: (message) =>
    `**Total:** \`${message.guild.channels.cache.size}\`\n**Textuels:** \`${
      message.guild.channels.cache.filter((ch) => ch.type === "GUILD_TEXT").size
    }\`\n**Vocaux:** \`${
      message.guild.channels.cache.filter((ch) => ch.type === "GUILD_VOICE")
        .size
    }\`\n**Catégories:** \`${
      message.guild.channels.cache.filter((ch) => ch.type === "GUILD_CATEGORY")
        .size
    }\`\n\n**Salon afk:** ${
      message.guild.afkChannel
        ? message.guild.afkChannel.name +
          ` **| Après : ${message.guild.afkTimeout} secondes**`
        : "Aucun salon AFK"
    }`,
  members: () => `${emojis.newUsers} Membres :`,
  membersDesc: (message) =>
    `**Total:** \`${message.guild.memberCount}\`\n**Utilisateurs:** \`${
      message.guild.memberCount -
      message.guild.members.cache.filter((m) => m.user.bot).size
    }\`\n**Bots:** \`${
      message.guild.members.cache.filter((m) => m.user.bot).size
    }\``,
  roles: () => `${emojis.newAdmin} Rôles :`,
  emojis: () => `${emojis.newFun} Emojis :`,
  features: () => `${emojis.newConfig} Features :`,
  featuresSupp: () => `et d'autres ...`,
  noFeatures: () => `\`Aucune features\``,
  others: () =>
    `${emojis.AnnouncementChannel} Salon Règles & Annonces discord :`,
  othersDesc: (message) =>
    `**Règles:** ${
      message.guild.channels.cache.get(message.guild.rulesChannelID)
        ? message.guild.channels.cache.get(message.guild.rulesChannelID)
        : "Aucun salon"
    }\n**Annonces discord:** ${
      message.guild.channels.cache.get(message.guild.publicUpdatesChannelID)
        ? message.guild.channels.cache.get(message.guild.publicUpdatesChannelID)
        : "Aucun salon"
    }`,
  url: () => `${emojis.newEmbed} Lien personnalisé :`,
  statsVoc: () => `${emojis.voice} Statistiques vocaux :`,
  desc1: (members, microMute, casqueMute, stream) => `
<:voice1_mys:740231856636690503> \`En vocal: ${members}\` 
<:mute_mys1:769947846496747562> \`${microMute}\`
<:muteCasque_mys1:769948019780354088> \`${casqueMute}\`
<:screenVideo_mys1:769948531657408523> \`${stream}\`
`,
  desc2: (microUnMute, casqueUnMute, video) => `
** **
<:unmute_mys1:769947930177699841> \`${microUnMute}\`
<:unmuteCasque_mys1:769947990512238613> \`${casqueUnMute}\`
<:SelfVideo_mys1:769948069248106507>  \`${video}\`
`,
  banner: () => `**Voici la bannière du serveur :**`,
};
