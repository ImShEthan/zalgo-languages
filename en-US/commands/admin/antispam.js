const { emojis } = require("../../../../config");
module.exports = {
  description: (message, guildData) => `
**1)** Anti-spam\n${
    guildData.enabled
      ? `${emojis.enabled} Enabled\nSince <t:${Math.round(
          Number(guildData.since) / 1000
        )}:F>`
      : `${emojis.disabled} Disabled`
  }

**2)** Ignore bots\n${
    guildData.ignorebots
      ? `${emojis.enabled} Enabled`
      : `${emojis.disabled} Disabled`
  }

**3)** Configure ignored roles

**4)** Configure ignored channels

**5)** Message interval\n**${message.language.convertMs(
    Number(guildData.maxinterval)
  )}**

**6)** Delete messages\n${
    guildData.deletemessages
      ? `${emojis.enabled} Enabled`
      : `${emojis.disabled} Disabled`
  }

**7)** How many messages does a member get **warned**?\n**${Number(
    guildData.maxduplicateswarn
  )}** spam messages

**8)** How many warnings does a member get **muted** at?\n**${Number(
    guildData.maxduplicatesmute
  )}** warnings

**9)** Mute time\n**${message.language.convertMs(
    Number(guildData.timemute)
  )}**

**10)** Enable settings for better anti-spam
`,

  questionTime: () => `Please enter the mute time!`,
  invalidTimes: () =>
    `${emojis.error} | You must enter a valid time! Valid units: \`s\`, \`m\`, \`h\`, \`d\`, \`w\`, \`y\``,

  advertMessages: () =>
    `After how many messages does a member get warned?`,
  errorQuestion: () => `Enter a valid number!`,
  errorQuestion: () => `Enter a number above 1!`,

  question1: () =>
    `After how many warnings a member is muted?`,

  interval: () => `Please send the interval! (ex: 3s)`,

  listDescriptionRole: () =>
    `
**1)** Add a role to ignore
**2)** Remove a role to ignore

**3)** Add a channel to ignore
**4)** Remove a channel to ignore`,

  titleRole: (count) => `Ignored roles - (${count})`,

  noFoundRole: () => `This role can't be found!`,

  addRoleQuestion: () => `Please mention the role to ignore!`,
  roleAlreadyExist: () => `This role is already in the ignored roles`,
  successAddRole: (salon) => `${salon} has been added to ignored roles!`,

  removeRoleQuestion: () => `Please mention the role remove!`,
  roleAlreadyNoExist: () => `This role is not in the ignored roles`,
  successRemoveRole: (salon) => `${salon} has been removed from ignored roles!`,

  listDescription: () =>
    `
**1)** Add a role to ignore
**2)** Remove a role to ignore

**3)** Add a channel to ignore
**4)** Remove a channel to ignore`,

  title: (count) => `Ignored channels - (${count})`,

  noFoundChannel: () => `This channel can't be found!`,
  returnmainmenu: () => `Back to main menu`,
  addChannelQuestion: () => `Please mention which channel to ignore!`,
  channelAlreadyExist: () => `This channel is already in ignored channels`,
  successAdd: (salon) => `${salon} has been added to ignored channels!`,

  removeChannelQuestion: () => `Please mention the channel to be removed!`,
  channelAlreadyNoExist: () => `This channel is not in the ignored channels`,
  successRemove: (salon) => `${salon} has been removed from ignored channels!`,
};
