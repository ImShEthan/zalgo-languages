const { emojis } = require("../../../../config");
module.exports = {
  functionDesactived: () =>
    `${emojis.error} | This function of logs is currently removed.`,

  mainEmbedDescription: (message, guildLogs) => `
**1)** __Boost :__\n${guildLogs.boost ? emojis.enabled : emojis.disabled} ${
    guildLogs.boost
      ? `Defined channel\n${
          message.guild.channels.cache.get(guildLogs.boost)
            ? message.guild.channels.cache.get(guildLogs.boost)
            : "Not found"
        }`
      : "Channel not defined"
  }
          
**2)** __Moderation :__\n${
    guildLogs.moderator ? emojis.enabled : emojis.disabled
  } ${
    guildLogs.moderator
      ? `Defined channel\n${
          message.guild.channels.cache.get(guildLogs.moderator)
            ? message.guild.channels.cache.get(guildLogs.moderator)
            : "Not found"
        }`
      : "Channel not defined"
  }
          
**3)** __Messages :__\n${
    guildLogs.messages ? emojis.enabled : emojis.disabled
  } ${
    guildLogs.messages
      ? `Defined channel\n${
          message.guild.channels.cache.get(guildLogs.messages)
            ? message.guild.channels.cache.get(guildLogs.messages)
            : "Not found"
        }`
      : "Channel not defined"
  }
          
**4)** __Anti Raid :__\n${
    guildLogs.antiraid ? emojis.enabled : emojis.disabled
  } ${
    guildLogs.antiraid
      ? `Defined channel\n${
          message.guild.channels.cache.get(guildLogs.antiraid)
            ? message.guild.channels.cache.get(guildLogs.antiraid)
            : "Not found"
        }`
      : "Channel not defined"
  }
          
**5)** __Server :__\n${guildLogs.server ? emojis.enabled : emojis.disabled} ${
    guildLogs.server
      ? `Defined channel\n${
          message.guild.channels.cache.get(guildLogs.server)
            ? message.guild.channels.cache.get(guildLogs.server)
            : "Not found"
        }`
      : "Channel not defined"
  }
          
**6)** __Voices :__\n${guildLogs.voice ? emojis.enabled : emojis.disabled} ${
    guildLogs.voice
      ? `Defined channel\n${
          message.guild.channels.cache.get(guildLogs.voice)
            ? message.guild.channels.cache.get(guildLogs.voice)
            : "Not found"
        }`
      : "Channel not defined"
  }`,

  whatChannelModLogs: () =>
    "How would you like to have the moderation logs?",
  whatChannelDelmsgLogs: () =>
    "How would you like to have the logs of deleted messages?",
  whatChannelRaidLogs: () =>
    "How would you like to have the anti raid logs?",
  whatChannelServerLogs: () =>
    "How would you like to have the server logs?",
  whatChannelVoiceLogs: () =>
    "How would you like to have the voice logs?",
  whatBoostChannel: () =>
    "How do you want to get the boost messages?",
  channelNotFound: () => `Channel not found !`,
};
