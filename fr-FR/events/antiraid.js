const { emojis } = require("../../../config");
module.exports = {
  createdAt: (date) => `Compte créé le ${date}`,

  reasons: {
    channelCreate: () => `Anti raid | Trop de salons créés`,
    channelDelete: () => `Anti raid | Trop de salons supprimés`,
    guildBanAdd: () => `Anti raid | Trop de membres banni`,
    guildBanRemove: () => `Anti raid | Trop de d'unbans`,
    guildMemberAdd: () => `Anti raid | Trop de bots ajoutés`,
    guildMemberRoleAdd: () => `Anti raid | Trop de grosses permissions données`,
    guildUpdate: () => `Anti raid | Changement de l'url trop de fois`,
    roleCreate: () => `Anti raid | Trop de rôles créés`,
    roleDelete: () => `Anti raid | Trop de rôles supprimés`,
    roleUpdate: () => `Anti raid | Trop de permissions de rôles changés`,
    webhookUpdate: () => `Anti raid | Trop de webhooks créés`,
    onlyVerif: () =>
      "Les bots non certifiés ne sont pas acceptés sur ce serveur !",
    botNotAllowed: () => "Les bots ne sont pas acceptés sur ce serveur !",
  },

  channelCreate: {
    desc: (userAction, channel, catégorie) =>
      `${userAction} (${userAction.tag}) a créé le salon ${channel} (${
        channel.name
      }) ${
        catégorie
          ? `se trouvant dans la catégorie **${catégorie.name}**.`
          : "se trouvant dans aucune catégorie."
      }.\n\n${emojis.success} **J'ai réussi à le dérank.**`,
    desc2: (userAction, channel, catégorie) =>
      `${userAction} (${userAction.tag}) a créé le salon ${channel} (${
        channel.name
      }) ${
        catégorie
          ? `se trouvant dans la catégorie **${catégorie.name}**.`
          : "se trouvant dans aucune catégorie."
      }.\n\n${emojis.error} **Je n'ai pas réussi à le dérank.**`,
    desc3: (userAction, channel, catégorie) =>
      `${userAction} (${userAction.tag}) a créé le salon ${channel} (${
        channel.name
      }) ${
        catégorie
          ? `se trouvant dans la catégorie **${catégorie.name}**.`
          : "se trouvant dans aucune catégorie."
      }.\n\n${emojis.success} **J'ai réussi à le kick.**`,
    desc4: (userAction, channel, catégorie) =>
      `${userAction} (${userAction.tag}) a créé le salon ${channel} (${
        channel.name
      }) ${
        catégorie
          ? `se trouvant dans la catégorie **${catégorie.name}**.`
          : "se trouvant dans aucune catégorie."
      }.\n\n${emojis.error} **Je n'ai pas réussi à le kick.**`,
    desc5: (userAction, channel, catégorie) =>
      `${userAction} (${userAction.tag}) a créé le salon ${channel} (${
        channel.name
      }) ${
        catégorie
          ? `se trouvant dans la catégorie **${catégorie.name}**.`
          : "se trouvant dans aucune catégorie."
      }.\n\n${emojis.success} **J'ai réussi à le ban.**`,
    desc6: (userAction, channel, catégorie) =>
      `${userAction} (${userAction.tag}) a créé le salon ${channel} (${
        channel.name
      }) ${
        catégorie
          ? `se trouvant dans la catégorie **${catégorie.name}**.`
          : "se trouvant dans aucune catégorie."
      }.\n\n${emojis.error} **Je n'ai pas réussi à le ban.**`,

    noFound: (channel, catégorie) =>
      `Le salon ${channel} a été créé, ${
        catégorie
          ? `se trouvant dans la catégorie ${catégorie.name}.`
          : "se trouvant dans aucune catégorie."
      } **mais je ne sais pas qui l'a créé.**\n\n**Pour plus de sécurité, j'ai quand même supprimé le salon !**`,
  },

  channelDelete: {
    desc: (userAction, channel, catégorie) =>
      `${userAction} (${userAction.tag}) a supprimé le salon ${channel} (${
        channel.name
      }) ${
        catégorie
          ? `se trouvant dans la catégorie **${catégorie.name}**.`
          : "se trouvant dans aucune catégorie."
      }.\n\n${emojis.success} **J'ai réussi à le dérank.**`,
    desc2: (userAction, channel, catégorie) =>
      `${userAction} (${userAction.tag}) a supprimé le salon ${channel} (${
        channel.name
      }) ${
        catégorie
          ? `se trouvant dans la catégorie **${catégorie.name}**.`
          : "se trouvant dans aucune catégorie."
      }.\n\n${emojis.error} **Je n'ai pas réussi à le dérank.**`,
    desc3: (userAction, channel, catégorie) =>
      `${userAction} (${userAction.tag}) a supprimé le salon ${channel} (${
        channel.name
      }) ${
        catégorie
          ? `se trouvant dans la catégorie **${catégorie.name}**.`
          : "se trouvant dans aucune catégorie."
      }.\n\n${emojis.success} **J'ai réussi à le kick.**`,
    desc4: (userAction, channel, catégorie) =>
      `${userAction} (${userAction.tag}) a supprimé le salon ${channel} (${
        channel.name
      }) ${
        catégorie
          ? `se trouvant dans la catégorie **${catégorie.name}**.`
          : "se trouvant dans aucune catégorie."
      }.\n\n${emojis.error} **Je n'ai pas réussi à le kick.**`,
    desc5: (userAction, channel, catégorie) =>
      `${userAction} (${userAction.tag}) a supprimé le salon ${channel} (${
        channel.name
      }) ${
        catégorie
          ? `se trouvant dans la catégorie **${catégorie.name}**.`
          : "se trouvant dans aucune catégorie."
      }.\n\n${emojis.success} **J'ai réussi à le ban.**`,
    desc6: (userAction, channel, catégorie) =>
      `${userAction} (${userAction.tag}) a supprimé le salon ${channel} (${
        channel.name
      }) ${
        catégorie
          ? `se trouvant dans la catégorie **${catégorie.name}**.`
          : "se trouvant dans aucune catégorie."
      }.\n\n${emojis.error} **Je n'ai pas réussi à le ban.**`,

    noFound: (channel, catégorie) =>
      `Le salon ${channel} a été supprimé, ${
        catégorie
          ? `se trouvant dans la catégorie ${catégorie.name}.`
          : "se trouvant dans aucune catégorie."
      } **mais je ne sais pas qui l'a supprimé.**`,
  },

  guildBanAdd: {
    desc: (userAction, user) =>
      `${userAction} (${userAction.tag}) a banni ${user.tag} (${user.id}).\n\n${emojis.success} **J'ai réussi à le dérank.**`,
    desc2: (userAction, user) =>
      `${userAction} (${userAction.tag}) a banni ${user.tag} (${user.id}).\n\n${emojis.error} **Je n'ai pas réussi à le dérank.**`,
    desc3: (userAction, user) =>
      `${userAction} (${userAction.tag}) a banni ${user.tag} (${user.id}).\n\n${emojis.success} **J'ai réussi à le kick.**`,
    desc4: (userAction, user) =>
      `${userAction} (${userAction.tag}) a banni ${user.tag} (${user.id}).\n\n${emojis.error} **Je n'ai pas réussi à le kick.**`,
    desc5: (userAction, user) =>
      `${userAction} (${userAction.tag}) a banni ${user.tag} (${user.id}).\n\n${emojis.success} **J'ai réussi à le ban.**`,
    desc6: (userAction, user) =>
      `${userAction} (${userAction.tag}) a banni ${user.tag} (${user.id}).\n\n${emojis.error} **Je n'ai pas réussi à le ban.**`,

    noFound: (user) =>
      `${user.tag} (${user.id}) a été banni **mais je ne sais pas qui l'a ban.**`,
  },

  guildBanRemove: {
    desc: (userAction, user) =>
      `${userAction} (${userAction.tag}) a unban ${user.tag} (${user.id}).\n\n${emojis.success} **J'ai réussi à le dérank.**`,
    desc2: (userAction, user) =>
      `${userAction} (${userAction.tag}) a unban ${user.tag} (${user.id}).\n\n${emojis.error} **Je n'ai pas réussi à le dérank.**`,
    desc3: (userAction, user) =>
      `${userAction} (${userAction.tag}) a unban ${user.tag} (${user.id}).\n\n${emojis.success} **J'ai réussi à le kick.**`,
    desc4: (userAction, user) =>
      `${userAction} (${userAction.tag}) a unban ${user.tag} (${user.id}).\n\n${emojis.error} **Je n'ai pas réussi à le kick.**`,
    desc5: (userAction, user) =>
      `${userAction} (${userAction.tag}) a unban ${user.tag} (${user.id}).\n\n${emojis.success} **J'ai réussi à le ban.**`,
    desc6: (userAction, user) =>
      `${userAction} (${userAction.tag}) a unban ${user.tag} (${user.id}).\n\n${emojis.error} **Je n'ai pas réussi à le ban.**`,

    noFound: (user) =>
      `${user.tag} (${user.id}) a été unban **mais je ne sais pas qui l'a unban.**`,
  },

  guildMemberRoleAdd: {
    desc: (userAction, role, member) =>
      `${userAction} (${userAction.tag}) a ajouté le rôle ${role} qui contient une grosse permission à ${member} (${member.id}).\n\n${emojis.success} **J'ai réussi à le dérank.**`,
    desc2: (userAction, role, member) =>
      `${userAction} (${userAction.tag}) a ajouté le rôle ${role} qui contient une grosse permission à ${member} (${member.id}).\n\n${emojis.error} **Je n'ai pas réussi à le dérank.**`,
    desc3: (userAction, role, member) =>
      `${userAction} (${userAction.tag}) a ajouté le rôle ${role} qui contient une grosse permission à ${member} (${member.id}).\n\n${emojis.success} **J'ai réussi à le kick.**`,
    desc4: (userAction, role, member) =>
      `${userAction} (${userAction.tag}) a ajouté le rôle ${role} qui contient une grosse permission à ${member} (${member.id}).\n\n${emojis.error} **Je n'ai pas réussi à le kick.**`,
    desc5: (userAction, role, member) =>
      `${userAction} (${userAction.tag}) a ajouté le rôle ${role} qui contient une grosse permission à ${member} (${member.id}).\n\n${emojis.success} **J'ai réussi à le ban.**`,
    desc6: (userAction, role, member) =>
      `${userAction} (${userAction.tag}) a ajouté le rôle ${role} qui contient une grosse permission à ${member} (${member.id}).\n\n${emojis.error} **Je n'ai pas réussi à le ban.**`,

    noFound: (role, member) =>
      `Le role ${role} qui contient une grosse permission à été ajouté à ${member} (${member.id}) **mais je ne sais pas qui l'a ajouté.**`,
  },

  guildMemberAdd: {
    desc: (userAction, member) =>
      `${userAction} (${userAction.tag}) a ajouté le bot ${member.user.tag} (${member.user.tag}).\n\n${emojis.success} **J'ai réussi à le dérank.**`,
    desc2: (userAction, member) =>
      `${userAction} (${userAction.tag}) a ajouté le bot ${member.user.tag} (${member.user.tag}).\n\n${emojis.error} **Je n'ai pas réussi à le dérank.**`,
    desc3: (userAction, member) =>
      `${userAction} (${userAction.tag}) a ajouté le bot ${member.user.tag} (${member.user.tag}).\n\n${emojis.success} **J'ai réussi à le kick.**`,
    desc4: (userAction, member) =>
      `${userAction} (${userAction.tag}) a ajouté le bot ${member.user.tag} (${member.user.tag}).\n\n${emojis.error} **Je n'ai pas réussi à le kick.**`,
    desc5: (userAction, member) =>
      `${userAction} (${userAction.tag}) a ajouté le bot ${member.user.tag} (${member.user.tag}).\n\n${emojis.success} **J'ai réussi à le ban.**`,
    desc6: (userAction, member) =>
      `${userAction} (${userAction.tag}) a ajouté le bot ${member.user.tag} (${member.user.tag}).\n\n${emojis.error} **Je n'ai pas réussi à le ban.**`,

    noFound: (member) =>
      `Le bot ${member.user.tag} (${member.user.tag}) a rejoins le serveur **mais je ne sais pas qui l'a ajouté.**`,
  },

  guildUpdate: {
    desc: (userAction) =>
      `${userAction} (${userAction.tag}) a modifié l'url perso du serveur.\n\n${emojis.success} **J'ai réussi à le dérank.**`,
    desc2: (userAction) =>
      `${userAction} (${userAction.tag}) a modifié l'url perso du serveur.\n\n${emojis.error} **Je n'ai pas réussi à le dérank.**`,
    desc3: (userAction) =>
      `${userAction} (${userAction.tag}) a modifié l'url perso du serveur.\n\n${emojis.success} **J'ai réussi à le kick.**`,
    desc4: (userAction) =>
      `${userAction} (${userAction.tag}) a modifié l'url perso du serveur.\n\n${emojis.error} **Je n'ai pas réussi à le kick.**`,
    desc5: (userAction) =>
      `${userAction} (${userAction.tag}) a modifié l'url perso du serveur.\n\n${emojis.success} **J'ai réussi à le ban.**`,
    desc6: (userAction) =>
      `${userAction} (${userAction.tag}) a modifié l'url perso du serveur.\n\n${emojis.error} **Je n'ai pas réussi à le ban.**`,

    noFound: () =>
      `L'url perso du serveur a été modifié **mais je ne sais pas qui l'a modifié.**`,
  },

  roleCreate: {
    desc: (userAction, role) =>
      `${userAction} (${userAction.tag}) a créé le rôle ${role} (${role.name}).\n\n${emojis.success} **J'ai réussi à le dérank.**`,
    desc2: (userAction, role) =>
      `${userAction} (${userAction.tag}) a créé le rôle ${role} (${role.name}).\n\n${emojis.error} **Je n'ai pas réussi à le dérank.**`,
    desc3: (userAction, role) =>
      `${userAction} (${userAction.tag}) a créé le rôle ${role} (${role.name}).\n\n${emojis.success} **J'ai réussi à le kick.**`,
    desc4: (userAction, role) =>
      `${userAction} (${userAction.tag}) a créé le rôle ${role} (${role.name}).\n\n${emojis.error} **Je n'ai pas réussi à le kick.**`,
    desc5: (userAction, role) =>
      `${userAction} (${userAction.tag}) a créé le rôle ${role} (${role.name}).\n\n${emojis.success} **J'ai réussi à le ban.**`,
    desc6: (userAction, role) =>
      `${userAction} (${userAction.tag}) a créé le rôle ${role} (${role.name}).\n\n${emojis.error} **Je n'ai pas réussi à le ban.**`,

    noFound: (role) =>
      `Le rôle ${role} a été créé **mais je ne sais pas qui l'a créé.**\n\n**Pour plus de sécurité, j'ai quand même supprimé le rôle !**`,
  },

  roleDelete: {
    desc: (userAction, role) =>
      `${userAction} (${userAction.tag}) a supprimé le rôle ${role} (${role.name}).\n\n${emojis.success} **J'ai réussi à le dérank.**`,
    desc2: (userAction, role) =>
      `${userAction} (${userAction.tag}) a supprimé le rôle ${role} (${role.name}).\n\n${emojis.error} **Je n'ai pas réussi à le dérank.**`,
    desc3: (userAction, role) =>
      `${userAction} (${userAction.tag}) a supprimé le rôle ${role} (${role.name}).\n\n${emojis.success} **J'ai réussi à le kick.**`,
    desc4: (userAction, role) =>
      `${userAction} (${userAction.tag}) a supprimé le rôle ${role} (${role.name}).\n\n${emojis.error} **Je n'ai pas réussi à le kick.**`,
    desc5: (userAction, role) =>
      `${userAction} (${userAction.tag}) a supprimé le rôle ${role} (${role.name}).\n\n${emojis.success} **J'ai réussi à le ban.**`,
    desc6: (userAction, role) =>
      `${userAction} (${userAction.tag}) a supprimé le rôle ${role} (${role.name}).\n\n${emojis.error} **Je n'ai pas réussi à le ban.**`,

    noFound: (role) =>
      `Le rôle ${role.name} a été supprimé **mais je ne sais pas qui l'a supprimé.**`,
  },

  roleUpdate: {
    desc: (userAction, newRole) =>
      `${userAction} (${userAction.tag}) a changé les permissions du rôle ${newRole} (${newRole.name}).\n\n${emojis.success} **J'ai réussi à le dérank.**`,
    desc2: (userAction, newRole) =>
      `${userAction} (${userAction.tag}) a changé les permissions du rôle ${newRole} (${newRole.name}).\n\n${emojis.error} **Je n'ai pas réussi à le dérank.**`,
    desc3: (userAction, newRole) =>
      `${userAction} (${userAction.tag}) a changé les permissions du rôle ${newRole} (${newRole.name}).\n\n${emojis.success} **J'ai réussi à le kick.**`,
    desc4: (userAction, newRole) =>
      `${userAction} (${userAction.tag}) a changé les permissions du rôle ${newRole} (${newRole.name}).\n\n${emojis.error} **Je n'ai pas réussi à le kick.**`,
    desc5: (userAction, newRole) =>
      `${userAction} (${userAction.tag}) a changé les permissions du rôle ${newRole} (${newRole.name}).\n\n${emojis.success} **J'ai réussi à le ban.**`,
    desc6: (userAction, newRole) =>
      `${userAction} (${userAction.tag}) a changé les permissions du rôle ${newRole} (${newRole.name}).\n\n${emojis.error} **Je n'ai pas réussi à le ban.**`,

    noFound: (newRole) =>
      `Les permissions du rôle ${newRole} (${newRole.name}) ont changées **mais je ne sais pas qui les ont changées.**`,
  },

  webhookUpdate: {
    desc: (userAction, channel) =>
      `${userAction} (${userAction.tag}) a créé un webhook dans le salon ${channel}.\n\n${emojis.success} **J'ai réussi à le dérank.**`,
    desc2: (userAction, channel) =>
      `${userAction} (${userAction.tag}) a créé un webhook dans le salon ${channel}.\n\n${emojis.error} **Je n'ai pas réussi à le dérank.**`,
    desc3: (userAction, channel) =>
      `${userAction} (${userAction.tag}) a créé un webhook dans le salon ${channel}.\n\n${emojis.success} **J'ai réussi à le kick.**`,
    desc4: (userAction, channel) =>
      `${userAction} (${userAction.tag}) a créé un webhook dans le salon ${channel}.\n\n${emojis.error} **Je n'ai pas réussi à le kick.**`,
    desc5: (userAction, channel) =>
      `${userAction} (${userAction.tag}) a créé un webhook dans le salon ${channel}.\n\n${emojis.success} **J'ai réussi à le ban.**`,
    desc6: (userAction, channel) =>
      `${userAction} (${userAction.tag}) a créé un webhook dans le salon ${channel}.\n\n${emojis.error} **Je n'ai pas réussi à le ban.**`,

    noFound: (channel) =>
      `Un webhook a été créé dans le salon ${channel} **mais je ne sais pas qui l'a créé.**\n\n**Pour plus de sécurité, j'ai quand même supprimé le webhook !**`,
  },
};
