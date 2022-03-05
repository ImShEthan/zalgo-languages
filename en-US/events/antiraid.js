const { emojis } = require("../../../config");
module.exports = {
  createdAt: (date) => `Account created the ${date}`,

  reasons: {
    channelCreate: () => `Anti raid | Too many salons created`,
    channelDelete: () => `Anti raid | Too many salons deleted`,
    guildBanAdd: () => `Anti raid | Too many members banned`,
    guildBanRemove: () => `Anti raid | oo many members unbanned`,
    guildMemberAdd: () => `Anti raid | Too many bots added`,
    guildMemberRoleAdd: () => `Anti raid | Too many big permissions given`,
    guildUpdate: () => `Anti raid | Change the url too many times`,
    roleCreate: () => `Anti raid | Too many roles created`,
    roleDelete: () => `Anti raid | Too many roles deleted`,
    roleUpdate: () => `Anti raid | Too many role permissions changed`,
    webhookUpdate: () => `Anti raid | Too many webhooks created`,
    onlyVerif: () =>
      "Uncertified bots are not allowed on this server !",
    botNotAllowed: () => "Bots are not allowed on this server !",
  },

  channelCreate: {
    desc: (userAction, channel, catégorie) =>
      `${userAction} (${userAction.tag}) has created the channel ${channel} (${
        channel.name
      }) ${
        catégorie
          ? `in the category **${catégorie.name}**.`
          : "is not in any category."
      }.\n\n${emojis.success} **I managed to unrank it.**`,
    desc2: (userAction, channel, catégorie) =>
      `${userAction} (${userAction.tag}) has created the channel ${channel} (${
        channel.name
      }) ${
        catégorie
          ? `in the category **${catégorie.name}**.`
          : "is not in any category."
      }.\n\n${emojis.error} **I was unable to unrank him.**`,
    desc3: (userAction, channel, catégorie) =>
      `${userAction} (${userAction.tag}) has created the channel ${channel} (${
        channel.name
      }) ${
        catégorie
          ? `in the category **${catégorie.name}**.`
          : "is not in any category."
      }.\n\n${emojis.success} **I managed to kick it.**`,
    desc4: (userAction, channel, catégorie) =>
      `${userAction} (${userAction.tag}) has created the channel ${channel} (${
        channel.name
      }) ${
        catégorie
          ? `in the category **${catégorie.name}**.`
          : "is not in any category."
      }.\n\n${emojis.error} **I was unable to kick him.**`,
    desc5: (userAction, channel, catégorie) =>
      `${userAction} (${userAction.tag}) has created the channel ${channel} (${
        channel.name
      }) ${
        catégorie
          ? `in the category **${catégorie.name}**.`
          : "is not in any category."
      }.\n\n${emojis.success} **I managed to ban him.**`,
    desc6: (userAction, channel, catégorie) =>
      `${userAction} (${userAction.tag}) has created the channel ${channel} (${
        channel.name
      }) ${
        catégorie
          ? `in the category **${catégorie.name}**.`
          : "is not in any category."
      }.\n\n${emojis.error} **I was unable to ban him**`,

    noFound: (channel, catégorie) =>
      `Le salon ${channel} a été créé, ${
        catégorie
          ? `in the category ${catégorie.name}.`
          : "is not in any category."
      } **but I don't know who created it. For safety's sake, I deleted the lounge anyway!**`,
  },

  channelDelete: {
    desc: (userAction, channel, catégorie) =>
      `${userAction} (${userAction.tag}) deleted the channel ${channel} (${
        channel.name
      }) ${
        catégorie
          ? `in the category **${catégorie.name}**.`
          : "is not in any category."
      }.\n\n${emojis.success} **I managed to unrank it.**`,
    desc2: (userAction, channel, catégorie) =>
      `${userAction} (${userAction.tag}) deleted the channel ${channel} (${
        channel.name
      }) ${
        catégorie
          ? `in the category **${catégorie.name}**.`
          : "is not in any category."
      }.\n\n${emojis.error} **I was unable to unrank him.**`,
    desc3: (userAction, channel, catégorie) =>
      `${userAction} (${userAction.tag}) deleted the channel ${channel} (${
        channel.name
      }) ${
        catégorie
          ? `in the category **${catégorie.name}**.`
          : "is not in any category."
      }.\n\n${emojis.success} **I managed to kick it.**`,
    desc4: (userAction, channel, catégorie) =>
      `${userAction} (${userAction.tag}) deleted the channel ${channel} (${
        channel.name
      }) ${
        catégorie
          ? `in the category **${catégorie.name}**.`
          : "is not in any category."
      }.\n\n${emojis.error} **I was unable to kick him.**`,
    desc5: (userAction, channel, catégorie) =>
      `${userAction} (${userAction.tag}) deleted the channel ${channel} (${
        channel.name
      }) ${
        catégorie
          ? `in the category **${catégorie.name}**.`
          : "is not in any category."
      }.\n\n${emojis.success} **I managed to ban him.**`,
    desc6: (userAction, channel, catégorie) =>
      `${userAction} (${userAction.tag}) deleted the channel ${channel} (${
        channel.name
      }) ${
        catégorie
          ? `in the category **${catégorie.name}**.`
          : "is not in any category."
      }.\n\n${emojis.error} **I was unable to ban him.**`,

    noFound: (channel, catégorie) =>
      `Le salon ${channel} a été supprimé, ${
        catégorie
          ? `in the category ${catégorie.name}.`
          : "is not in any category."
      } **but I don't know who deleted it.**`,
  },

  guildBanAdd: {
    desc: (userAction, user) =>
      `${userAction} (${userAction.tag}) banned ${user.tag} (${user.id}).\n\n${emojis.success} **I managed to unrank it.**`,
    desc2: (userAction, user) =>
      `${userAction} (${userAction.tag}) banned ${user.tag} (${user.id}).\n\n${emojis.error} **I was unable to unrank him.**`,
    desc3: (userAction, user) =>
      `${userAction} (${userAction.tag}) banned ${user.tag} (${user.id}).\n\n${emojis.success} **I managed to kick it.**`,
    desc4: (userAction, user) =>
      `${userAction} (${userAction.tag}) banned ${user.tag} (${user.id}).\n\n${emojis.error} **I was unable to kick him.**`,
    desc5: (userAction, user) =>
      `${userAction} (${userAction.tag}) banned ${user.tag} (${user.id}).\n\n${emojis.success} **I managed to ban him.**`,
    desc6: (userAction, user) =>
      `${userAction} (${userAction.tag}) banned ${user.tag} (${user.id}).\n\n${emojis.error} **I was unable to ban him.**`,

    noFound: (user) =>
      `${user.tag} (${user.id}) have been ban **but I don't know who ban'd him**`,
  },

  guildBanRemove: {
    desc: (userAction, user) =>
      `${userAction} (${userAction.tag}) unbanned ${user.tag} (${user.id}).\n\n${emojis.success} **I managed to unrank it.**`,
    desc2: (userAction, user) =>
      `${userAction} (${userAction.tag}) unbanned ${user.tag} (${user.id}).\n\n${emojis.error} **I was unable to unrank him.**`,
    desc3: (userAction, user) =>
      `${userAction} (${userAction.tag}) unbanned ${user.tag} (${user.id}).\n\n${emojis.success} **I managed to kick it.**`,
    desc4: (userAction, user) =>
      `${userAction} (${userAction.tag}) unbanned ${user.tag} (${user.id}).\n\n${emojis.error} **I was unable to kick him.**`,
    desc5: (userAction, user) =>
      `${userAction} (${userAction.tag}) unbanned ${user.tag} (${user.id}).\n\n${emojis.success} **I managed to ban him.**`,
    desc6: (userAction, user) =>
      `${userAction} (${userAction.tag}) unbanned ${user.tag} (${user.id}).\n\n${emojis.error} **I was unable to ban him.**`,

    noFound: (user) =>
      `${user.tag} (${user.id}) have been unban **but I don't know who unban'd him**`,
  },

  guildMemberRoleAdd: {
    desc: (userAction, role, member) =>
      `${userAction} (${userAction.tag}) added the role ${role} qui contient une grosse permission à ${member} (${member.id}).\n\n${emojis.success} **I managed to unrank it.**`,
    desc2: (userAction, role, member) =>
      `${userAction} (${userAction.tag}) added the role ${role} qui contient une grosse permission à ${member} (${member.id}).\n\n${emojis.error} **I was unable to unrank him.**`,
    desc3: (userAction, role, member) =>
      `${userAction} (${userAction.tag}) added the role ${role} qui contient une grosse permission à ${member} (${member.id}).\n\n${emojis.success} **I managed to kick it.**`,
    desc4: (userAction, role, member) =>
      `${userAction} (${userAction.tag}) added the role ${role} qui contient une grosse permission à ${member} (${member.id}).\n\n${emojis.error} **I was unable to kick him.**`,
    desc5: (userAction, role, member) =>
      `${userAction} (${userAction.tag}) added the role ${role} qui contient une grosse permission à ${member} (${member.id}).\n\n${emojis.success} **I managed to ban him.**`,
    desc6: (userAction, role, member) =>
      `${userAction} (${userAction.tag}) added the role ${role} qui contient une grosse permission à ${member} (${member.id}).\n\n${emojis.error} **I was unable to ban him.**`,

    noFound: (role, member) =>
      `The role ${role} which contains a big permission has been added to ${member} (${member.id}) **but I don't know who added it.**`,
  },

  guildMemberAdd: {
    desc: (userAction, member) =>
      `${userAction} (${userAction.tag}) added the bot ${member.user.tag} (${member.user.tag}).\n\n${emojis.success} **I managed to unrank it.**`,
    desc2: (userAction, member) =>
      `${userAction} (${userAction.tag}) added the bot ${member.user.tag} (${member.user.tag}).\n\n${emojis.error} **I was unable to unrank him.**`,
    desc3: (userAction, member) =>
      `${userAction} (${userAction.tag}) added the bot ${member.user.tag} (${member.user.tag}).\n\n${emojis.success} **I managed to kick it.**`,
    desc4: (userAction, member) =>
      `${userAction} (${userAction.tag}) added the bot ${member.user.tag} (${member.user.tag}).\n\n${emojis.error} **I was unable to kick him.**`,
    desc5: (userAction, member) =>
      `${userAction} (${userAction.tag}) added the bot ${member.user.tag} (${member.user.tag}).\n\n${emojis.success} **I managed to ban him.**`,
    desc6: (userAction, member) =>
      `${userAction} (${userAction.tag}) added the bot ${member.user.tag} (${member.user.tag}).\n\n${emojis.error} **I was unable to ban him.**`,

    noFound: (member) =>
      `The bot ${member.user.tag} (${member.user.tag}) has joined the server **but I don't know who added it.**`,
  },

  guildUpdate: {
    desc: (userAction) =>
      `${userAction} (${userAction.tag}) modified the server's personal url.\n\n${emojis.success} **I managed to unrank it.**`,
    desc2: (userAction) =>
      `${userAction} (${userAction.tag}) modified the server's personal url.\n\n${emojis.error} **I was unable to unrank him.**`,
    desc3: (userAction) =>
      `${userAction} (${userAction.tag}) modified the server's personal url.\n\n${emojis.success} **I managed to kick it.**`,
    desc4: (userAction) =>
      `${userAction} (${userAction.tag}) modified the server's personal url.\n\n${emojis.error} **I was unable to kick him.**`,
    desc5: (userAction) =>
      `${userAction} (${userAction.tag}) modified the server's personal url.\n\n${emojis.success} **I managed to ban him.**`,
    desc6: (userAction) =>
      `${userAction} (${userAction.tag}) modified the server's personal url.\n\n${emojis.error} **I was unable to ban him.**`,

    noFound: () =>
      `The personal url of the server has been modified **but I don't know who modified it.**`,
  },

  roleCreate: {
    desc: (userAction, role) =>
      `${userAction} (${userAction.tag}) created the role ${role} (${role.name}).\n\n${emojis.success} **I managed to unrank it.**`,
    desc2: (userAction, role) =>
      `${userAction} (${userAction.tag}) created the role ${role} (${role.name}).\n\n${emojis.error} **I was unable to unrank him.**`,
    desc3: (userAction, role) =>
      `${userAction} (${userAction.tag}) created the role ${role} (${role.name}).\n\n${emojis.success} **I managed to kick it.**`,
    desc4: (userAction, role) =>
      `${userAction} (${userAction.tag}) created the role ${role} (${role.name}).\n\n${emojis.error} **I was unable to kick him.**`,
    desc5: (userAction, role) =>
      `${userAction} (${userAction.tag}) created the role ${role} (${role.name}).\n\n${emojis.success} **I managed to ban him.**`,
    desc6: (userAction, role) =>
      `${userAction} (${userAction.tag}) created the role ${role} (${role.name}).\n\n${emojis.error} **I was unable to ban him.**`,

    noFound: (role) =>
      `The role ${role} has been created **But I don't know who created it. For safety's sake, I deleted the role anyway.**`,
  },

  roleDelete: {
    desc: (userAction, role) =>
      `${userAction} (${userAction.tag}) deleted the role ${role} (${role.name}).\n\n${emojis.success} **I managed to unrank it.**`,
    desc2: (userAction, role) =>
      `${userAction} (${userAction.tag}) deleted the role ${role} (${role.name}).\n\n${emojis.error} **I was unable to unrank him.**`,
    desc3: (userAction, role) =>
      `${userAction} (${userAction.tag}) deleted the role ${role} (${role.name}).\n\n${emojis.success} **I managed to kick it.**`,
    desc4: (userAction, role) =>
      `${userAction} (${userAction.tag}) deleted the role ${role} (${role.name}).\n\n${emojis.error} **I was unable to kick him.**`,
    desc5: (userAction, role) =>
      `${userAction} (${userAction.tag}) deleted the role ${role} (${role.name}).\n\n${emojis.success} **I managed to ban him.**`,
    desc6: (userAction, role) =>
      `${userAction} (${userAction.tag}) deleted the role ${role} (${role.name}).\n\n${emojis.error} **I was unable to ban him.**`,

    noFound: (role) =>
      `The role ${role.name} has been deleted **but I don't know who deleted it`,
  },

  roleUpdate: {
    desc: (userAction, newRole) =>
      `${userAction} (${userAction.tag}) changed the permissions of the role ${newRole} (${newRole.name}).\n\n${emojis.success} **I managed to unrank it.**`,
    desc2: (userAction, newRole) =>
      `${userAction} (${userAction.tag}) changed the permissions of the role ${newRole} (${newRole.name}).\n\n${emojis.error} **I was unable to unrank him.**`,
    desc3: (userAction, newRole) =>
      `${userAction} (${userAction.tag}) changed the permissions of the role ${newRole} (${newRole.name}).\n\n${emojis.success} **I managed to kick it.**`,
    desc4: (userAction, newRole) =>
      `${userAction} (${userAction.tag}) changed the permissions of the role ${newRole} (${newRole.name}).\n\n${emojis.error} **I was unable to kick him.**`,
    desc5: (userAction, newRole) =>
      `${userAction} (${userAction.tag}) changed the permissions of the role ${newRole} (${newRole.name}).\n\n${emojis.success} **I managed to ban him.**`,
    desc6: (userAction, newRole) =>
      `${userAction} (${userAction.tag}) changed the permissions of the role ${newRole} (${newRole.name}).\n\n${emojis.error} **I was unable to ban him.**`,

    noFound: (newRole) =>
      `The permissions of the role ${newRole} (${newRole.name}) have changed **but I don't know who changed them.**`,
  },

  webhookUpdate: {
    desc: (userAction, channel) =>
      `${userAction} (${userAction.tag})created a webhook in this channel ${channel}.\n\n${emojis.success} **I managed to unrank it.**`,
    desc2: (userAction, channel) =>
      `${userAction} (${userAction.tag}) created a webhook in this channel ${channel}.\n\n${emojis.error} **I was unable to unrank him.**`,
    desc3: (userAction, channel) =>
      `${userAction} (${userAction.tag}) created a webhook in this channel ${channel}.\n\n${emojis.success} **I managed to kick it.**`,
    desc4: (userAction, channel) =>
      `${userAction} (${userAction.tag}) created a webhook in this channel ${channel}.\n\n${emojis.error} **I was unable to kick him.**`,
    desc5: (userAction, channel) =>
      `${userAction} (${userAction.tag})created a webhook in this channel ${channel}.\n\n${emojis.success} **I managed to ban him.**`,
    desc6: (userAction, channel) =>
      `${userAction} (${userAction.tag}) created a webhook in this channel ${channel}.\n\n${emojis.error} **I was unable to ban him.**`,

    noFound: (channel) =>
      `A webhook has been created in the channel ${channel} **but I don't know who created it.**\n\n**For more security, I still removed the webhook!**`,
  },
};
