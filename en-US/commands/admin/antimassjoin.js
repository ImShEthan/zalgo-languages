const { emojis } = require("../../../../config");
module.exports = {
  desc: (data) => `
**1)** __Anti Mass Join: __
${
  data.enabled
    ? "<:enabled_mys:797495648421281822> Enabled"
    : "<:disabled_mys:797495585480638464> Disabled"
}

**2)** **${
    data.maxmembers
  }** maximum members will be able to join the server in 10 seconds

**3)** __Kick new members until server disables protection__:
${
  data.raid
    ? "<:enabled_mys:797495648421281822> Yes"
    : "<:disabled_mys:797495585480638464> No"
}

**4)** __Protection status: __
${
  data.raidmode
    ? "<:enabled_mys:797495648421281822> Server closed"
    : "<:disabled_mys:797495585480638464> Open server"
}`,

  question: () =>
    `How many members will be able to join the server in 10 seconds?`,
  error: () => `Invalid number!`,
  lock: (message) =>
    `The server is now **closed** by ${message.author.tag}`,
  unlock: (message) =>
    `The server is now **open** by ${message.author.tag}`,

  msgKick: () =>
    `The server is currently closed because too many members have joined in a short time! Try joining again later.`,
  reasonKick: () =>
    `The server is currently closed because too many members have joined in a short time!`,
  msg: () =>
    `The server is now **closed** because too many members joined in a short time.`,
};
