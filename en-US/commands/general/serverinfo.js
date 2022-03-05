const { emojis } = require("../../../../config");
module.exports = {
  noFoundDesc: () => `No description`,
  name: () => `${emojis.newGeneral} Name:`,
  id: () => `${emojis.newID} ID:`,
  createdAt: () => `${emojis.poum} Created on:`,
  owner: () => `${emojis.newOwner} Server owner:`,
  ownerNotFound: () => `Owner not found!`,
  boost: () => `${emojis.newBoost} Number of boost(s):`,
  boostDesc: (message) =>
    `\`Boosts: ${
      message.guild.premiumSubscriptionCount
    }\nNiveau: ${message.guild.premiumTier
      .replace("TIER_1", "1")
      .replace("TIER_2", "2")
      .replace("TIER_3", "3")}\``,
  region: () => `${emojis.newStats} Region:`,
  channels: () => `${emojis.text1} Channels:`,
  channelsDesc: (message) =>
    `**Total:** \`${message.guild.channels.cache.size}\`\n**Text:** \`${
      message.guild.channels.cache.filter((ch) => ch.type === "GUILD_TEXT").size
    }\`\n**Voice:** \`${
      message.guild.channels.cache.filter((ch) => ch.type === "GUILD_VOICE")
        .size
    }\`\n**Categories:** \`${
      message.guild.channels.cache.filter((ch) => ch.type === "GUILD_CATEGORY")
        .size
    }\`\n\n**AFK channel:** ${
      message.guild.afkChannel
        ? message.guild.afkChannel.name +
          ` **| After : ${message.guild.afkTimeout} seconds**`
        : "No AFK channel"
    }`,
  members: () => `${emojis.newUsers} Members :`,
  membersDesc: (message) =>
    `**Total:** \`${message.guild.memberCount}\`\n**Users:** \`${
      message.guild.memberCount -
      message.guild.members.cache.filter((m) => m.user.bot).size
    }\`\n**Bots:** \`${
      message.guild.members.cache.filter((m) => m.user.bot).size
    }\``,
  roles: () => `${emojis.newAdmin} Roles :`,
  emojis: () => `${emojis.newFun} Emojis :`,
  features: () => `${emojis.newConfig} Features :`,
  featuresSupp: () => `and others ...`,
  noFeatures: () => `\`No features\``,
  others: () =>
    `${emojis.AnnouncementChannel} Rules channels & Discord announcements:`,
  othersDesc: (message) =>
    `**Rules:** ${
      message.guild.channels.cache.get(message.guild.rulesChannelID)
        ? message.guild.channels.cache.get(message.guild.rulesChannelID)
        : "No channel"
    }\n**Discord announcements:** ${
      message.guild.channels.cache.get(message.guild.publicUpdatesChannelID)
        ? message.guild.channels.cache.get(message.guild.publicUpdatesChannelID)
        : "No channel"
    }`,
  url: () => `${emojis.newEmbed} Custom link :`,
  statsVoc: () => `${emojis.voice} Voice statistics :`,
  desc1: (members, microMute, casqueMute, stream) => `
<:voice1_mys:740231856636690503> \`In voice: ${members}\` 
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
  banner: () => `**Here is the server banner:**`,
};
