const { emojis } = require("../../../../config");
module.exports = {
  questionTime: () =>
    `Please enter the time at which the message will be deleted!`,
  invalidTimes: () =>
    `${emojis.error} | You must enter a valid time! Valid units: \`s\`, \`m\`, \`h\`, \`d\`, \`w\`, \`y\``,
  desc: (message, guildData, formattedMessage) => `
**1)** __Leaving messages__
${
  guildData.enabled
    ? `${emojis.enabled} Enabled`
    : `${emojis.disabled} Disabled`
}

**2)** __Leaving messages channel__
${
  guildData.channel
    ? message.guild.channels.cache.get(guildData.channel)
      ? message.guild.channels.cache.get(guildData.channel)
      : "No channel."
    : "No channel."
}

**3)** __Message__
${
  guildData.message
    ? guildData.message.length > 800
      ? guildData.message.slice(0, 800) + "** and more...**"
      : guildData.message
    : "No message."
}

**4)** __Delete the message__
${
  guildData.deletemessage
    ? "After " + message.language.convertMs(guildData.deletemessage)
    : "No"
}


__**Preview:**__
${formattedMessage !== "** **" ? formattedMessage : "No message."}
`,

  questionChannel: () => `What will be the leaving message channel?`,
  questionMessage: () => `What will be the leaving message?`,
  error: () => `Your message contains too many characters!`,
  nofind: () => `Channel not found !`,
};
