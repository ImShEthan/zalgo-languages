const { emojis } = require("../../../config");
module.exports = {
  channelCreate: {
    noUserAction: (channel, catégorie) =>
      `The channel ${channel.name} (${channel}) has been created, ${
        catégorie
          ? `is in the category ${catégorie.name}.`
          : "is not in any category."
      }`,
  },
  channelDelete: {
    noUserAction: (channel, catégorie) =>
      `The channel ${channel.name} has been deleted, ${
        catégorie
          ? `is in the category ${catégorie.name}.`
          : "is not in any category."
      }`,
  },
  guildBanAdd: {
    noUserAction: (user) => `${user.tag} (${user.id}) has been banned.`,
  },
  guildBanRemove: {
    noUserAction: (user) => `${user.tag} (${user.id}) has been unbanned.`,
  },
  guildMemberAdd: {
    userAction: (member) =>
      `${member} (${member.user.tag}) has join the server !`,
    createdAt: (date) => `Account created the ${date}`,
  },
  guildMemberBoost: {
    text: () => `{member} just boost {server} !`,
    footer: (member) =>
      `Do the same and boost now ${member.guild.name} !`,
  },
  guildMemberNicknameUpdate: {
    userAction: (member, oldNickname, newNickname) =>
      `${member} (${
        member.user.tag
      }) changed its nickname in the server \`${
        oldNickname ? oldNickname : member.user.username
      }\` à \`${newNickname ? newNickname : member.user.username}\` !`,
    createdAt: (date) => `Account created the ${date}`,
  },
  guildMemberRemove: {
    userAction: (member) =>
      `${member} (${member.user.tag}) has leave the server !`,
    createdAt: (date) => `Account created the ${date}`,
  },
  guildMemberRoleAdd: {
    noUserAction: (member, role) =>
      `${member.user} (${member.user.tag}) (**${member.user.id})** has received the role ${role}.`,
  },
  guildMemberRoleRemove: {
    noUserAction: (member, role) =>
      `${member.user} (${member.user.tag}) (**${member.user.id})** has been removed from the role ${role}.`,
  },
  roleCreate: {
    noUserAction: (role) => `the role ${role.name} has been created.`,
  },
  roleDelete: {
    noUserAction: (role) => `the role ${role.name} has been deleted.`,
  },
  voiceChannelDeaf: {
    desc: (member) =>
      `${member} (${member.user.tag}) just got muted headphones !`,
    createdAt: (date) => `Account created the ${date}`,
  },
  voiceChannelJoin: {
    desc: (member, channel) =>
      `${member} (${member.user.tag}) just join the channel ${channel} !`,
    createdAt: (date) => `Account created the ${date}`,
  },
  voiceChannelLeave: {
    desc: (member, channel) =>
      `${member} (${member.user.tag}) just leave the channel ${channel} !`,
    createdAt: (date) => `Account created the ${date}`,
  },
  voiceChannelMute: {
    desc: (member) =>
      `${member} (${member.user.tag}) just got mic muted !`,
    createdAt: (date) => `Account created the ${date}`,
  },
  voiceChannelSwitch: {
    desc: (member, oldChannel, newChannel) =>
      `${member} (${member.user.tag}) just changed the salon from \`${oldChannel.name}\` to \`${newChannel.name}\` !`,
    createdAt: (date) => `Account created the ${date}`,
  },
  voiceChannelUneaf: {
    desc: (member) =>
      `${member} (${member.user.tag}) just got mic muted !`,
    createdAt: (date) => `Account created the ${date}`,
  },
  voiceChannelUnmute: {
    desc: (member) =>
      `${member} (${member.user.tag}) just got mic unmuted !`,
    createdAt: (date) => `Account created the ${date}`,
  },
  userDiscriminatorUpdate: {
    description: (user, oldDiscriminator, newDiscriminator) =>
      `${user} (${user.tag}) changed its discriminator from \`${oldDiscriminator}\` to \`${newDiscriminator}\` !`,
    footer: (user, date) => `User ID ${user.id} | Account created the ${date}`,
  },
  userUsernameUpdate: {
    description: (user, oldUsername, newUsername) =>
      `${user} (${user.tag}) hanged its username from \`${oldUsername}\` to \`${newUsername}\` !`,
    footer: (user, date) => `User ID ${user.id} | Account created the ${date}`,
  },
  messageContentEdited: {
    desc: (message) =>
      `${message.author} (${message.author.tag}) has edit his message in the channel ${message.channel}`,
    old: () => `Before the message was edited :`,
    new: () => `After the message was edited :`,
    seeMessage: () => `See the message.`,
    accountCreate: (date) => `Account created the ${date}`,
    messageSu: () => `**Message too big.**`,
    noMessage: () => `No message, probably an image or an embed.`,
  },
  messageDelete: {
    title: () => `Message deleted`,
    desc: (message) =>
      `${message.author} (${message.author.tag}) deleted his message in the channel ${message.channel}`,
    accountCreate: (date) => `Account created the ${date}`,
    messageSu: () => `**Message too big.**`,
    noMessage: () => `No message, probably an image or an embed.`,
  },
};
