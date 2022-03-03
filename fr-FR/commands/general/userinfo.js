const { emojis } = require("../../../../config");
module.exports = {
  userNotFound: () =>
    `${emojis.error} | Cette personne n'est pas présente sur ce serveur !`,
  bot: () => `${emojis.error} | Cette utilisateur est un bot !`,

  dnd: () => `Ne pas déranger`,
  idle: () => `Inactif`,
  online: () => `En ligne`,
  offline: () => `Hors ligne`,

  utilTitle: () => `${emojis.id} Utilisateur`,
  util: (
    user,
    member,
    userFlags,
    badgesBot,
    creationDate,
    creationDateUnix,
    badgesnitro,
    emojisList,
    badgesZalgo,
    message,
    flags,
    statut,
    prefix,
    platform
  ) => [
    `**❯ Username:** ${user.username}`,
    `**❯ Discriminateur:** ${user.discriminator}`,
    `**❯ ID:** ${user.id}`,
    `**❯ Badges Discord:** ${
      userFlags.length
        ? userFlags.map((flag) => flags[flag]).join(", ") +
          `${badgesnitro ? ", <:nitro_mys:726530932164657184>" : ""}`
        : "Aucun badge."
    }`,
    `**❯ Badges Zalgo:** ${
      badgesBot.length
        ? badgesBot.map((flag) => badgesZalgo[flag]).join(", ")
        : "Aucun badge."
    }\n***❯❯❯ Description des badges: \`${prefix}zalgo-badges\`***`,
    `**❯ Avatar:** [Lien](${user.displayAvatarURL({ dynamic: true })})`,
    `**❯ Créé :** ${
      creationDate.charAt(0).toUpperCase() +
      creationDate.substr(1, creationDate.length)
    } (${creationDateUnix})`,
    `**❯ ${
      emojisList[
        member.presence ? member.presence.status : "offline" || "offline"
      ]
    } Statut:** ${statut}`,
    `**❯ Plateforme(s):** ${platform}`,
    `\u200b`,
  ],
  membTitle: () => `${emojis.users} Membre`,

  fields: {
    createdAt: {
      title: () => `Création`,
    },
    joinedAt: {
      title: () => `Arrivée`,
    },
    joinWay: {
      title: () => `Arrivée grâce à`,
      oauth: () => `Invitation oauth2 (via discordapp.com).`,
      vanity: () =>
        `Invitation personnalisée configurée par un administrateur.`,
      unknown: (user) =>
        `Impossible de déterminer comment ${user.username} a rejoint le serveur.`,
      invite: (user) => user.tag,
    },
    invites: {
      title: () => `Invitations`,
      content: (inviteData) =>
        `**${
          inviteData.invites +
          inviteData.bonus -
          inviteData.leaves -
          inviteData.fake
        }** invitations (**${inviteData.invites}** ordinaires, **${
          inviteData.bonus
        }** bonus, **${
          inviteData.fake > 0 ? `-${inviteData.fake}` : `${inviteData.fake}`
        }** faux, **${
          inviteData.leaves > 0
            ? `-${inviteData.leaves}`
            : `${inviteData.leaves}`
        }** partis)`,
    },
    joinOrder: {
      title: () => `Ordre d'arrivées`,
      content: (previous, next, user) =>
        `${previous ? `${previous.tag} > ` : ""}${user.tag}${
          next ? ` > ${next.tag}` : ""
        }`,
    },
  },
  memb: (
    joinDate,
    joinDateUnix,
    joinWay,
    fields,
    previous,
    next,
    member,
    message
  ) => [
    `**❯ Rejoins :** ${
      joinDate.charAt(0).toUpperCase() + joinDate.substr(1, joinDate.length)
    } (${joinDateUnix})`,
    `**❯ Rejoins grâce à:** ${joinWay}`,
    `**❯ Ordre:** ${fields.joinOrder.content(previous, next, member.user)}`,
    `**❯ Plus haut rôle:** ${
      member.roles.highest.id === message.guild.id
        ? "Aucun rôle"
        : member.roles.highest.name
    }`,
    `\u200b`,
  ],
  voc: (member, count) => `**❯ Salon:** ${member.voice.channel.name} (${
    member.voice.channel.id
  })\n\`${count}\` personne(s) dans ce salon.

Mute **micro serveur**: ${
    member.voice.serverMute
      ? "<:mute_mys1:769947846496747562>"
      : "<:unmute_mys1:769947930177699841>"
  }
Mute **casque serveur**: ${
    member.voice.serverDeaf
      ? "<:muteCasque_mys1:769948019780354088>"
      : "<:unmuteCasque_mys1:769947990512238613>"
  }

Mute **micro localement**: ${
    member.voice.selfMute
      ? "<:mute_mys1:769947846496747562>"
      : "<:unmute_mys1:769947930177699841>"
  }
Mute **casque localement**: ${
    member.voice.selfDeaf
      ? "<:muteCasque_mys1:769948019780354088>"
      : "<:unmuteCasque_mys1:769947990512238613>"
  }

<:SelfVideo_mys1:769948069248106507> Caméra vidéo: ${
    member.voice.selfVideo ? emojis.success : emojis.error
  }
<:screenVideo_mys1:769948531657408523> Stream vidéo: ${
    member.voice.streaming ? emojis.success : emojis.error
  }
`,
  co: () => `${emojis.voice} Actuellement connecté en salon vocal :`,
};
