const { emojis } = require("../../../../config");
module.exports = {
  desc: (
    guildData,
    message
  ) => `
**1)** __Channel manager :__\n${
    guildData.channel
      ? `${emojis.enabled} Enabled\n<#${
          message.guild.channels.cache.get(guildData.channel)
            ? message.guild.channels.cache.get(guildData.channel).id
            : "Not found"
        }>`
      : `${emojis.disabled} Disabled`
  }

**2)** __Category :__\n${
    guildData.category
      ? `${emojis.enabled} Enabled\n${
          message.guild.channels.cache.get(guildData.category)
            ? message.guild.channels.cache.get(guildData.category).name
            : "Not found"
        }`
      : `${emojis.disabled} Disabled`
  }

**3)** __Prefix of the channel :__\n${
    guildData.prefix ? guildData.prefix : "No prefix"
  }

**4)** __Permission to manage the channel :__\n${
    guildData.managechannel
      ? `${emojis.enabled} Enabled`
      : `${emojis.disabled} Disabled`
  }

**5)** __Permission to manage members in the channel :__\n${
    guildData.managemembers
      ? `${emojis.enabled} Enabled`
      : `${emojis.disabled} Disabled`
  }
          
__Default limit :__ **${
    guildData.limitusers
  }**\n*Make ⬆️ to increase the default number of places.\nMake ⬇️ to decrease the default number of places.*
`,

  error1: () =>
    `${emojis.error} | You must have a category where to set the temporary channels!`,

  prefix: () => `Send the prefix for temporary channels!`,
};
