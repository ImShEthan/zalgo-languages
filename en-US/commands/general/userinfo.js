const { emojis } = require("../../../../config");
module.exports = {
  userNotFound: () =>
    `${emojis.error} | This person is not present on this server!`,
  bot: () => `${emojis.error} | This user is a bot!`,

  dnd: () => `Do not disturb`,
  idle: () => `Idle`,
  online: () => `Online`,
  offline: () => `Offline`,

  utilTitle: () => `${emojis.id} User`,
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
    `**❯ Discriminator:** ${user.discriminator}`,
    `**❯ ID:** ${user.id}`,
    `**❯ Discord badges:** ${
      userFlags.length
        ? userFlags.map((flag) => flags[flag]).join(", ") +
          `${badgesnitro ? ", <:nitro_mys:726530932164657184>" : ""}`
        : "No badges."
    }`,
    `**❯ Zalgo badges:** ${
      badgesBot.length
        ? badgesBot.map((flag) => badgesZalgo[flag]).join(", ")
        : "No badges."
    }\n***❯❯❯ Description of badges: \`${prefix}zalgo-badges\`***`,
    `**❯ Avatar:** [Lien](${user.displayAvatarURL({ dynamic: true })})`,
    `**❯ Created on :** ${
      creationDate.charAt(0).toUpperCase() +
      creationDate.substr(1, creationDate.length)
    } (${creationDateUnix})`,
    `**❯ ${
      emojisList[
        member.presence ? member.presence.status : "offline" || "offline"
      ]
    } Status:** ${statut}`,
    `**❯ Platform(s):** ${platform}`,
    `\u200b`,
  ],
  membTitle: () => `${emojis.users} Member`,

  fields: {
    createdAt: {
      title: () => `Creation`,
    },
    joinedAt: {
      title: () => `Arrival`,
    },
    joinWay: {
      title: () => `Arrival thanks to`,
      oauth: () => `Oauth2 invite (via discordapp.com).`,
      vanity: () =>
        `Personalized invitation configured by an administrator.`,
      unknown: (user) =>
        `Unable to determine how ${user.username} joined the server.`,
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
        }** invitations (**${inviteData.invites}** common, **${
          inviteData.bonus
        }** bonus, **${
          inviteData.fake > 0 ? `-${inviteData.fake}` : `${inviteData.fake}`
        }** fake, **${
          inviteData.leaves > 0
            ? `-${inviteData.leaves}`
            : `${inviteData.leaves}`
        }** left)`,
    },
    joinOrder: {
      title: () => `Order of arrival`,
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
    `**❯ Join:** ${
      joinDate.charAt(0).toUpperCase() + joinDate.substr(1, joinDate.length)
    } (${joinDateUnix})`,
    `**❯ Join with:** ${joinWay}`,
    `**❯ Order:** ${fields.joinOrder.content(previous, next, member.user)}`,
    `**❯ Highest role:** ${
      member.roles.highest.id === message.guild.id
        ? "Ro roles"
        : member.roles.highest.name
    }`,
    `\u200b`,
  ],
  voc: (member, count) => `**❯ Channel:** ${member.voice.channel.name} (${
    member.voice.channel.id
  })\n\`${count}\` person(s) in this channel.

Mute **micro server**: ${
    member.voice.serverMute
      ? "<:mute_mys1:769947846496747562>"
      : "<:unmute_mys1:769947930177699841>"
  }
Mute **server headset**: ${
    member.voice.serverDeaf
      ? "<:muteCasque_mys1:769948019780354088>"
      : "<:unmuteCasque_mys1:769947990512238613>"
  }

Mute **micro locally**: ${
    member.voice.selfMute
      ? "<:mute_mys1:769947846496747562>"
      : "<:unmute_mys1:769947930177699841>"
  }
Mute **headphones locally**: ${
    member.voice.selfDeaf
      ? "<:muteCasque_mys1:769948019780354088>"
      : "<:unmuteCasque_mys1:769947990512238613>"
  }

<:SelfVideo_mys1:769948069248106507> Video camera: ${
    member.voice.selfVideo ? emojis.success : emojis.error
  }
<:screenVideo_mys1:769948531657408523> Video streaming: ${
    member.voice.streaming ? emojis.success : emojis.error
  }
`,
  co: () => `${emojis.voice} Currently connected in voice channel:`,
};
