const { emojis } = require("../../../../config");
module.exports = {
  functionDesactived: () =>
    `${emojis.error} | Cette fonction de logs est actuellement supprimée.`,

  mainEmbedDescription: (message, guildLogs) => `
**1)** __Boost :__\n${guildLogs.boost ? emojis.enabled : emojis.disabled} ${
    guildLogs.boost
      ? `Salon défini\n${
          message.guild.channels.cache.get(guildLogs.boost)
            ? message.guild.channels.cache.get(guildLogs.boost)
            : "Introuvable"
        }`
      : "Salon non défini"
  }
          
**2)** __Modération :__\n${
    guildLogs.moderator ? emojis.enabled : emojis.disabled
  } ${
    guildLogs.moderator
      ? `Salon défini\n${
          message.guild.channels.cache.get(guildLogs.moderator)
            ? message.guild.channels.cache.get(guildLogs.moderator)
            : "Introuvable"
        }`
      : "Salon non défini"
  }
          
**3)** __Messages :__\n${
    guildLogs.messages ? emojis.enabled : emojis.disabled
  } ${
    guildLogs.messages
      ? `Salon défini\n${
          message.guild.channels.cache.get(guildLogs.messages)
            ? message.guild.channels.cache.get(guildLogs.messages)
            : "Introuvable"
        }`
      : "Salon non défini"
  }
          
**4)** __Anti Raid :__\n${
    guildLogs.antiraid ? emojis.enabled : emojis.disabled
  } ${
    guildLogs.antiraid
      ? `Salon défini\n${
          message.guild.channels.cache.get(guildLogs.antiraid)
            ? message.guild.channels.cache.get(guildLogs.antiraid)
            : "Introuvable"
        }`
      : "Salon non défini"
  }
          
**5)** __Serveur :__\n${guildLogs.server ? emojis.enabled : emojis.disabled} ${
    guildLogs.server
      ? `Salon défini\n${
          message.guild.channels.cache.get(guildLogs.server)
            ? message.guild.channels.cache.get(guildLogs.server)
            : "Introuvable"
        }`
      : "Salon non défini"
  }
          
**6)** __Voices :__\n${guildLogs.voice ? emojis.enabled : emojis.disabled} ${
    guildLogs.voice
      ? `Salon défini\n${
          message.guild.channels.cache.get(guildLogs.voice)
            ? message.guild.channels.cache.get(guildLogs.voice)
            : "Introuvable"
        }`
      : "Salon non défini"
  }`,

  whatChannelModLogs: () =>
    "Dans quel salon voulez-vous vous les logs de modération ?",
  whatChannelDelmsgLogs: () =>
    "Dans quel salon voulez-vous vous les logs de messages supprimés ?",
  whatChannelRaidLogs: () =>
    "Dans quel salon voulez-vous vous les logs de l'anti raid ?",
  whatChannelServerLogs: () =>
    "Dans quel salon voulez-vous vous les logs du serveur ?",
  whatChannelVoiceLogs: () =>
    "Dans quel salon voulez-vous vous les logs vocaux ?",
  whatBoostChannel: () =>
    "Dans quel salon voulez-vous vous les messages de boost ?",
  channelNotFound: () => `Salon introuvable !`,
};
