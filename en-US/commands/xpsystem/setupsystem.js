const { emojis } = require("../../../../config");
module.exports = {
  mainEmbedDescription: (
    guildData,
    message
  ) => `__**Press a reaction to activate/deactivate a parameter.**__\n\n
**1)** __Xp system :__\n${
    guildData.enabled
      ? `${emojis.enabled} Activated`
      : `${emojis.disabled} Off`
  }

**2)** __Channel :__\n${
    guildData.channel
      ? `${emojis.enabled} Activated\n<#${
          message.guild.channels.cache.get(guildData.channel)
            ? message.guild.channels.cache.get(guildData.channel).id
            : "Channel not found !"
        }>`
      : `${emojis.disabled} Activated`
  }

**3)** __Message :__\n${
    guildData.message
      ? `${emojis.enabled} Activated\n\`\`\`${guildData.message}\`\`\``
      : `${emojis.disabled} Off`
  }

**4)** *To reset the level message*

**5)** Do boosters have an xp bonus? ${
    guildData.boosterxp ? "Yes: x" + guildData.boosterxp : "No"
  }

**6)** Xp multiplied by :\n${guildData.xpmultiplicator}
          `,
  channel: () =>
    "Please mention the salon when sending level messages!",
  msg: () =>
    "Send the message you want for the level messages !\n\n```INFOS :\n\n{author} :Mention of the author of the message.\n{author.tag} : Tag of the author of the message.\n{author.name} : Name of the author of the message.\n{author.id} : ID of the author of the message.\n{author.createdat} : Account creation of the author of the message.\n{author.createdattimestamp} : Account creation of the author of the message in Unix Timestamp.\n{level} : New level of the user.\n{levelxp} : XP to the next level.\n{allxp} : Total XP of the user.```",
  tooChars: () => "You have too many characters in your message !",
  success: () => "Bravo {author}, you are now **{level}**!",
  multiplicator: () => "Please send the multiplier! (ex: 2)",
  invalidInt: () => `${emojis.error} | Send a valid number !`,
};
// d