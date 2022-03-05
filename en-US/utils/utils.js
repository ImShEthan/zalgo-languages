const { emojis } = require("../../../config");
module.exports = {
  vote: () =>
    `**You like Zalgo ?**\nGo vote for him on Top.gg to get access to this command !\n\nhttps://top.gg/bot/710135804714024962/vote`,
  page: () => `Page`,
  noButton: (prefix) =>
    `Do the \`${prefix}addbot command \` to get the links of the bot !`,

  next: () => `Next page`,
  previous: () => `Previous page`,
  reasonWarns: () => `Too many warns`,

  variables: () => `
\`\`\`--- User's information : ---

Mention of the user : {user}
Id of the user : {user.id}
Tag of the user : {user.tag}
Name of the user : {user.name}
Creation date of the user account : {user.createdat}
Creation date of the user account in Unix Timestamp : {user.createdattimestamp}

--- Inviter's information : ---

Mention de l'inviteur : {inviter}
Id of the inviter : {inviter.id}
Tag of the inviter : {inviter.tag}
Name of the inviter : {inviter.name}
Invitation number : {inviter.invitations}

--- Invitation's information : ---

Invite code : {invite.code}
Number of use : {invite.uses}

--- Server's information : ---

Total members : {membercount}
Server : {server}\`\`\``,

  wait: () => `${emojis.loading} | Please wait...`,
  prefix: (prefix) =>
    `Hello! Please use**${prefix}help** for see all command !`,

  maintenance: () =>
    `${emojis.warn} | The bot is currently in maintenance !`,
  slowmode: () =>
    `${emojis.error} | Please wait a moment before using a command!\n***${emojis.warn} More you do the command, more the cooldown will be long, more you will have to wait before doing any command !***`,
  slowmode1: () =>
    `${emojis.error} | Please wait a moment before using a command!\n***${emojis.warn} More you do the command, more the cooldown will be long, more you will have to wait before doing any command !***`,

  specialMessages: require("./special-messages.js"),
};
