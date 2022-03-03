const { emojis } = require("../../../config");
module.exports = {
  channelCreate: {
    noUserAction: (channel, catégorie) =>
      `Le salon ${channel.name} (${channel}) a été créé, ${
        catégorie
          ? `se trouvant dans la catégorie ${catégorie.name}.`
          : "se trouvant dans aucune catégorie."
      }`,
  },
  channelDelete: {
    noUserAction: (channel, catégorie) =>
      `Le salon ${channel.name} a été supprimé, ${
        catégorie
          ? `se trouvant dans la catégorie ${catégorie.name}.`
          : "se trouvant dans aucune catégorie."
      }`,
  },
  guildBanAdd: {
    noUserAction: (user) => `${user.tag} (${user.id}) a été banni.`,
  },
  guildBanRemove: {
    noUserAction: (user) => `${user.tag} (${user.id}) a été unban.`,
  },
  guildMemberAdd: {
    userAction: (member) =>
      `${member} (${member.user.tag}) a rejoint le serveur !`,
    createdAt: (date) => `Compte créé le ${date}`,
  },
  guildMemberBoost: {
    text: () => `{member} vient de booster {server} !`,
    footer: (member) =>
      `Fait pareil et boost dès maintenant ${member.guild.name} !`,
  },
  guildMemberNicknameUpdate: {
    userAction: (member, oldNickname, newNickname) =>
      `${member} (${
        member.user.tag
      }) a changé son pseudonyme sur le serveur de \`${
        oldNickname ? oldNickname : member.user.username
      }\` à \`${newNickname ? newNickname : member.user.username}\` !`,
    createdAt: (date) => `Compte créé le ${date}`,
  },
  guildMemberRemove: {
    userAction: (member) =>
      `${member} (${member.user.tag}) a quitté le serveur !`,
    createdAt: (date) => `Compte créé le ${date}`,
  },
  guildMemberRoleAdd: {
    noUserAction: (member, role) =>
      `${member.user} (${member.user.tag}) (**${member.user.id})** a reçu le rôle ${role}.`,
  },
  guildMemberRoleRemove: {
    noUserAction: (member, role) =>
      `${member.user} (${member.user.tag}) (**${member.user.id})** a été enlever du rôle ${role}.`,
  },
  roleCreate: {
    noUserAction: (role) => `Le rôle ${role.name} a été créé.`,
  },
  roleDelete: {
    noUserAction: (role) => `Le rôle ${role.name} a été supprimé.`,
  },
  voiceChannelDeaf: {
    desc: (member) =>
      `${member} (${member.user.tag}) viens d'être mute casque !`,
    createdAt: (date) => `Compte créé le ${date}`,
  },
  voiceChannelJoin: {
    desc: (member, channel) =>
      `${member} (${member.user.tag}) vient de rejoindre le salon ${channel} !`,
    createdAt: (date) => `Compte créé le ${date}`,
  },
  voiceChannelLeave: {
    desc: (member, channel) =>
      `${member} (${member.user.tag}) vient de quitter le salon ${channel} !`,
    createdAt: (date) => `Compte créé le ${date}`,
  },
  voiceChannelMute: {
    desc: (member) =>
      `${member} (${member.user.tag}) viens d'être mute micro !`,
    createdAt: (date) => `Compte créé le ${date}`,
  },
  voiceChannelSwitch: {
    desc: (member, oldChannel, newChannel) =>
      `${member} (${member.user.tag}) viens de changer de salon de \`${oldChannel.name}\` à \`${newChannel.name}\` !`,
    createdAt: (date) => `Compte créé le ${date}`,
  },
  voiceChannelUneaf: {
    desc: (member) =>
      `${member} (${member.user.tag}) viens d'être mute micro !`,
    createdAt: (date) => `Compte créé le ${date}`,
  },
  voiceChannelUnmute: {
    desc: (member) =>
      `${member} (${member.user.tag}) viens d'être unmute micro !`,
    createdAt: (date) => `Compte créé le ${date}`,
  },
  userDiscriminatorUpdate: {
    description: (user, oldDiscriminator, newDiscriminator) =>
      `${user} (${user.tag}) a changé son discriminateur de \`${oldDiscriminator}\` à \`${newDiscriminator}\` !`,
    footer: (user, date) => `User ID ${user.id} | Compte créé le ${date}`,
  },
  userUsernameUpdate: {
    description: (user, oldUsername, newUsername) =>
      `${user} (${user.tag}) a changé son nom d'utilisateur de \`${oldUsername}\` à \`${newUsername}\` !`,
    footer: (user, date) => `User ID ${user.id} | Compte créé le ${date}`,
  },
  messageContentEdited: {
    desc: (message) =>
      `${message.author} (${message.author.tag}) a modifié son message dans le salon ${message.channel}`,
    old: () => `Avant que le message ai été édité :`,
    new: () => `Après que le message ai été édité :`,
    seeMessage: () => `Voir le message.`,
    accountCreate: (date) => `Compte créé le ${date}`,
    messageSu: () => `**Message trop grand.**`,
    noMessage: () => `Aucun message, surement une image ou un embed.`,
  },
  messageDelete: {
    title: () => `Message supprimé`,
    desc: (message) =>
      `${message.author} (${message.author.tag}) a supprimé son message dans le salon ${message.channel}`,
    accountCreate: (date) => `Compte créé le ${date}`,
    messageSu: () => `**Message trop grand.**`,
    noMessage: () => `Aucun message, surement une image ou un embed.`,
  },
};
