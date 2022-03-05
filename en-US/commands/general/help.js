const { emojis } = require("../../../../config");
module.exports = {
  question: () =>
    `How do you want the help page to be displayed?`,
  commands: () => `Commands`,
  infos: (guild, prefix, result) =>
    `The current prefix in __**${guild}**__ is \`${prefix}\`.`,
  title: () => `Help menu:`,
  desc: (isOwner) =>
    `***Tap a reaction to see the commands in a category.***\n\n**1)** Administration\n**2)** Games\n**3)** General\n**4)** Invitations\n**5)** Moderation\n**6)** Levels\n${
      isOwner ? "**7)** Owner" : ""
    }`,
  page: () => `In one page`,
  pageMultiple: () => `In several pages`,

  returnToMenu: () => `↩️ To return to the main menu`,

  admin: (prefix) => `
\`${prefix}admins\` ● See the list of server administrators.
\`${prefix}anti-capitals\` ● Prevent sending messages with capital letters.
\`${prefix}anti-emojis\` ● Prevent sending messages with emojis.
\`${prefix}anti-links\` ● Prevents sending discord links and https links.
\`${prefix}anti-mass-join\` ● Prevents members from joining the server too quickly.
\`${prefix}anti-mass-mentions\` ● Prevents sending messages with mentions.
\`${prefix}anti-spam\` ● Configure anti spam.
\`${prefix}autorole\` ● Add a role to a new member when they come.
\`${prefix}blacklist\` ● Blacklist of members.
\`${prefix}bots\` ● View server bots.
\`${prefix}counters\` ● Configure rooms to be able to have statistics.
\`${prefix}embed\` ● Create an embed.
\`${prefix}emojicreate\` ● Create an emoji.
\`${prefix}join-message\` ● Configure the welcome message.
\`${prefix}leave-message\` ● Configure the start message.
\`${prefix}emojicreate\` ● Create an emoji on the server by giving an image link (png, jpg).
\`${prefix}logs-master\` ● Configure logs on your server.
\`${prefix}owners\` ● Give certain members access to commands reserved for the server owner.
\`${prefix}permissions\` ● Configure command permissions on roles.
\`${prefix}protect-plugin\` ● Configure anti-raid.
\`${prefix}react-role\` ● Manage role-reactions (buttons).
\`${prefix}setlang\` ● Change the language of the bot on this server.
\`${prefix}setprefix\` ● Change the prefix of the bot on this server.
\`${prefix}setup-statut-role\` ● Configure the role to give if a member has such text in his status.
\`${prefix}setup-temp-voice\` ● Configure temporary channels (voice).
\`${prefix}whitelist\` ● Anti raid whitelist.
`,

  games: (prefix) => `
\`${prefix}awkword\` ● Create a game of awkword.
\`${prefix}betrayal\` ● Create a betrayal game.
\`${prefix}checkers\` ● Create a game of checkers.
\`${prefix}chess\` ● Create a game of chess.
\`${prefix}doodlecrew\` ● Create a game of doodlecrew.
\`${prefix}fishing\` ● Create a game of fishing.
\`${prefix}lettertile\` ● Create a game of lettertile.
\`${prefix}poker\` ● Create a poker game.
\`${prefix}puttparty\` ● Create a game of puttparty.
\`${prefix}spellcast\` ● Create a game of spellcast.
\`${prefix}wordsnack\` ● Create a game of wordsnack.
\`${prefix}youtube\` ● Create a game of youtube.
`,

  general: (prefix) => `
\`${prefix}addbot\` ● Have the bot's invitation link.
\`${prefix}avatar\` ● View a member's avatar.
\`${prefix}banner\` ● View a member's banner.
\`${prefix}emoji\` ● Get information about an emoji.
\`${prefix}help\` ● See bot commands.
\`${prefix}ping\` ● See bot latency.
\`${prefix}server-avatar\` ● View server avatar.
\`${prefix}server-banner\` ● View server banner.
\`${prefix}server-emojis\` ● View server emojis.
\`${prefix}server-info\` ● View server information.
\`${prefix}server-names\` ● View old server names.
\`${prefix}snipe\` ● See the last message deleted from a channel.
\`${prefix}someone\` ● Gives information about a random member.
\`${prefix}user-avatars\` ● View a member's past avatars.
\`${prefix}user-info\` ● View member information.
\`${prefix}user-names\` ● View a member's past names.
\`${prefix}zalgo-badges\` ● View bot badges.
`,

  giveaway: (prefix) => `
\`${prefix}giveaway-end\` ● End a giveaway.
\`${prefix}giveaway-list\` ● List of giveaways.
\`${prefix}giveaway-reroll\` ● Reroll a giveaway.
\`${prefix}giveaway\` ● Create a giveaway.
`,

  invites: (prefix) => `
\`${prefix}addbonus\` ● Add an invitations bonus to a member.
\`${prefix}fetch-invites\` ● Fetch invitations to avoid bugs.
\`${prefix}invites\` ● See his invitations or those of a member.
\`${prefix}leaderboard-invites\` ● See the top server invites.
\`${prefix}removebonus\` ● Remove an invite bonus from a member.
\`${prefix}reset-server-invites\` ● Delete invitations from all members of the server.
\`${prefix}restore-server-invites\` ● Deliver invitations to all server members.
\`${prefix}sync-invites\` ● Sync server invites if you made invites before adding the bot.
`,
  mod: (prefix) => `
\`${prefix}auto-sanctions\` ● Configure automatic sanctions after a certain number of warnings.
\`${prefix}ban\` ● Ban a member.
\`${prefix}clear-sanctions\` ● Delete a member's bans, kicks, warns.
\`${prefix}clear\` ● Delete messages (\`${prefix}clear 5 <user>\` to delete a member's messages).
\`${prefix}kick\` ● Kick a member.
\`${prefix}lock\` ● Close a channel.
\`${prefix}moove\` ● Move members from one voice channel to another.
\`${prefix}mute-list\` ● View muted members.
\`${prefix}mute\` ● Mute a member.
\`${prefix}nuke\` ● Recreate the channel where the command was made.
\`${prefix}sanctions\` ● See a member's sanctions.
\`${prefix}unban\` ● Unban a member.
\`${prefix}unlock\` ● Open a channel.
\`${prefix}unmute\` ● Unmute a member.
\`${prefix}warn\` ● Warn a member.
`,
  xp: (prefix) => `
\`${prefix}addrank-level\` ● Add a role to give if a member at such level.
\`${prefix}leaderboard-level\` ● See the top of server levels.
\`${prefix}rank\` ● See his level or that of a member.
\`${prefix}ranks-level\` ● See all the roles to give if a member has such level.
\`${prefix}removerank-level\` ●  Delete a role to give if a member has such level.
\`${prefix}reset-card\` ●  Delete the configuration of his card.
\`${prefix}reset-server\` ● Remove levels from all server members.
\`${prefix}restore-server\` ● Reset the levels of all server members.
\`${prefix}setup-card\` ● Configure your rank card.
\`${prefix}setup-system\` ● Configure the message and the channel where the level crossing message will be sent.
`,

  owner: (prefix) => `
\`${prefix}eval\` ● Perform javascript code.
\`${prefix}server-list\` ● See the list of bot servers.
`,
};
