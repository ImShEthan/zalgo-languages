const { emojis } = require("../../../../config");
module.exports = {
  desc: (data, message) => `
**1)** __**Counter n° 1:**__
${
  data.c1.enabled
    ? `${emojis.enabled} Enabled
__Channel:__ ${
        message.guild.channels.cache.get(data.c1.channel)
          ? message.guild.channels.cache.get(data.c1.channel)
          : "<:error_mys:720681441670725645> Channel not found !"
      }
__Channel type:__ ${
        data.c1.channelType === "voice" ? "Voice channel" : "Category"
      }
__Text:__ ${data.c1.text}
__Counter type:__ ${data.c1.type}`
    : `${emojis.disabled} Disabled`
}

**2)** __**Counter n° 2:**__
${
  data.c2.enabled
    ? `${emojis.enabled} Enabled
__Channel:__ ${
        message.guild.channels.cache.get(data.c2.channel)
          ? message.guild.channels.cache.get(data.c2.channel)
          : "<:error_mys:720681441670725645> Channel not found !"
      }
__Channel type:__ ${
        data.c2.channelType === "voice" ? "Voice channel" : "Category"
      }
__Text:__ ${data.c2.text}
__Counter type:__ ${data.c2.type}`
    : `${emojis.disabled} Disabled`
}

**3)** __**Counter n° 3:**__
${
  data.c3.enabled
    ? `${emojis.enabled} Enabled
__Channel:__ ${
        message.guild.channels.cache.get(data.c3.channel)
          ? message.guild.channels.cache.get(data.c3.channel)
          : "<:error_mys:720681441670725645> Channel not found !"
      }
__Channel type:__ ${
        data.c3.channelType === "voice" ? "Voice channel" : "Category"
      }
__Text:__ ${data.c3.text}
__Channel type:__ ${data.c3.type}`
    : `${emojis.disabled} Disabled`
}

**4)** __**Counter n° 4:**__
${
  data.c4.enabled
    ? `${emojis.enabled} Enabled
__Channel:__ ${
        message.guild.channels.cache.get(data.c4.channel)
          ? message.guild.channels.cache.get(data.c4.channel)
          : "<:error_mys:720681441670725645> Channel not found !"
      }
__Channel type:__ ${
        data.c4.channelType === "voice" ? "Voice channel" : "Category"
      }
__Text:__ ${data.c4.text}
__Counter type:__ ${data.c4.type}`
    : `${emojis.disabled} Disabled`
}
`,

  desc2: () => `
**1)** Members on the server
**2)** Members (excluding bots) on the server
**3)** Members (excluding users) on the server
**4)** Categories on the server
**5)** Text channels on the server
**6)** Voice channels on the server
**7)** Boosts on the server
**8)** Members online on the server
**9)** Roles on the server
**10)** Members connected in voice channels on the server
`,

  type: () =>
    `React to 📜 to create the counter in voice channel\nReact to 📑 to create the counter in category`,

  vocal: () => `Voice channel`,
  cat: () => `Category`,

  example: () =>
    `Enter the name you want for your counter! **(Example: \`📌 Members: {count}\`)**`,
  error: () => `Your channel name must contain \`{count}\` !`,
};
