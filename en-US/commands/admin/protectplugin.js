const { emojis } = require("../../../../config");
module.exports = {
  // Main
  mainEmbedDescription: () => `
**1)** Preventing the creation of channels
          
**2)** Preventing the removal of channels
          
**3)** Preventing the creation of roles
          
**4)** Preventing the removal of roles
          
**5)** Preventing the possibility of a ban
          
**6)** Prevent the possibility of unban
          
**7)** Prevent the creation of webhooks
          
**8)** Prevent the possibility of giving a role with a big permission \n*(ex: Administrator, Manage server, give roles, ect...)*
          
**9)** Prevent editing of the custom url
          
**10)** Prevent editing of a role
          
**11)** Prevent bots from being added`,
  // Anti create channel
  titleAntiChannel: () => "Anti channel creation :",
  descriptionAntiChannel: (guildData, message) => `
**1)** ${
    guildData.anticreatechannel.enabled
      ? `The plugin is activated. ${emojis.enabled}\nSince <t:${Math.round(
          guildData.anticreatechannel.since / 1000
        )}:F>`
      : `The plugin is disabled. ${emojis.disabled}`
  }

**2)** Punishment: **${guildData.anticreatechannel.sanction}**

**3)** After how many channels created the anti-raid work: **${
    guildData.anticreatechannel.maxaction
  }**

**4)** Is the whitelist included? **${
    guildData.anticreatechannel.whitelistcompte ? "Yes" : "No"
  }**
***(If the whitelist is not included, a whitelist member who creates a channel will be sanctioned.)***

**5)** Resets the number of actions of the sanctioned member: **${
    guildData.anticreatechannel.resetactions ? "Yes" : "No"
  }**

↩️ Return to the main menu.`,
  sendMemberChannelLimit: () =>
    "Enter the number of channels a member can create",
  // Settings & general
  chooseSanction: () =>
    "__**Please select the punishment:**__\n\n1️⃣ Derank\n2️⃣ Kick\n3️⃣ Ban",
  validNumber: () => "Enter a valid number!",
  above1: () => "Enter a number above 1!",
  // Anti delete channel
  titleAntiDeleteChannel: () => "Anti channels removal:",
  descriptionAntiDeleteChannel: (guildData, message) => `
**1)** ${
    guildData.antideletechannel.enabled
      ? `The plugin is activated. ${emojis.enabled}\nSince <t:${Math.round(
          guildData.antideletechannel.since / 1000
        )}:F>`
      : `The plugin is disabled. ${emojis.disabled}`
  }

**2)** Punishment: **${guildData.antideletechannel.sanction}**

**3)** After how many deleted channels does the anti raid work?: **${
    guildData.antideletechannel.maxaction
  }**

**4)** Is the whitelist included? **${
    guildData.antideletechannel.whitelistcompte ? "Yes" : "No"
  }**
***(If the whitelist is not included, a whitelist member who deletes a channel will be sanctioned.)***

**5)** Reset the number of actions of the sanctioned member: **${
    guildData.antideletechannel.resetactions ? "Yes" : "No"
  }**

**6)** Re-create the channel: **${
    guildData.antideletechannel.recreatechannel ? "Yes" : "No"
  }**

↩️ Return to the main menu.`,
  sendMemberChannelDeleteLimit: () =>
    "Enter the number of channels a member can delete",
  // Anti role creation
  titleAntiRoleCreation: () => "Anti role creation :",
  descriptionAntiRoleCreation: (guildData, message) => `
**1)** ${
    guildData.anticreaterole.enabled
      ? `The plugin is activated. ${emojis.enabled}\nSince <t:${Math.round(
          guildData.anticreaterole.since / 1000
        )}:F>`
      : `The plugin is disabled. ${emojis.disabled}`
  }

**2)** Punishment: **${guildData.anticreaterole.sanction}**

**3)** After how many roles are created the anti raid works: **${
    guildData.anticreaterole.maxaction
  }**

**4)** Is the whitelist included? **${
    guildData.anticreaterole.whitelistcompte ? "Yes" : "No"
  }**
***(If the whitelist is not included, a whitelist member who creates a role will be punished.)***

**5)** Reset the number of actions of the punished member: **${
    guildData.anticreaterole.resetactions ? "Yes" : "No"
  }**

↩️ Return to the main menu.`,
  sendMemberRoleCreateLimit: () =>
    "Enter the number of roles a member can create",
  // Anti role delete
  titleAntiRoleDelete: () => "Anti role deletion :",
  descriptionAntiRoleDelete: (guildData, message) => `
**1)** ${
    guildData.antideleterole.enabled
      ? `The plugin is activated. ${emojis.enabled}\nSince <t:${Math.round(
          guildData.antideleterole.since / 1000
        )}:F>`
      : `The plugin is disabled. ${emojis.disabled}`
  }

**2)** Punishment: **${guildData.antideleterole.sanction}**

**3)** After how many deleted roles the anti raid work: **${
    guildData.antideleterole.maxaction
  }**

**4)** Is the whitelist included? **${
    guildData.antideleterole.whitelistcompte ? "Yes" : "No"
  }**
***(If the whitelist is not included, a whitelist member who deletes a role will be punished.)***

**5)** Reset the number of actions of the punished member: **${
    guildData.antideleterole.resetactions ? "Yes" : "No"
  }**

**6)** Re-create role: **${
    guildData.antideleterole.recreatechannel ? "Yes" : "No"
  }**

↩️ Return to the main menu.`,
  sendMemberRoleDeleteLimit: () =>
    "Enter the number of roles a member can delete",
  // Anti ban
  titleAntiBan: () => "Anti ban :",
  descriptionAntiBan: (guildData, message) => `
**1)** ${
    guildData.antiban.enabled
      ? `The plugin is activated. ${emojis.enabled}\nSince <t:${Math.round(
          guildData.antiban.since / 1000
        )}:F>`
      : `The plugin is disabled. ${emojis.disabled}`
  }

**2)** Punishment: **${guildData.antiban.sanction}**

**3)** After how many bans the anti raid work: **${
    guildData.antiban.maxaction
  }**

**4)** Is the whitelist included? **${
    guildData.antiban.whitelistcompte ? "Yes" : "No"
  }**
***(If the whitelist is not included, a whitelist member who ban will be punished.)***

**5)** Reset the number of actions of the punished member: **${
    guildData.antiban.resetactions ? "Yes" : "No"
  }**

**6)** Unban the banned member: **${
    guildData.antiban.unbanmember ? "Yes" : "No"
  }**

↩️ Return to the main menu.`,
  sendMemberBanLimit: () =>
    "Enter the number of members a moderator can ban",
  // Anti unban
  titleAntiUnban: () => "Anti unban :",
  descriptionAntiUnban: (guildData, message) => `
**1)** ${
    guildData.antiunban.enabled
      ? `The plugin is activated. ${emojis.enabled}\nSince <t:${Math.round(
          guildData.antiunban.since / 1000
        )}:F>`
      : `The plugin is disabled. ${emojis.disabled}`
  }

**2)** Punishment: **${guildData.antiunban.sanction}**

**3)** After how many unbans the anti raid work: **${
    guildData.antiunban.maxaction
  }**

**4)** Is the whitelist included? **${
    guildData.antiunban.whitelistcompte ? "Yes" : "No"
  }**
***(If the whitelist is not included, a whitelist member who unban will be punished.)***

**5)** Reset the number of actions of the punished member: **${
    guildData.antiunban.resetactions ? "Yes" : "No"
  }**

**6)** Ban the unban member: **${guildData.antiunban.banmember ? "Yes" : "No"}**

↩️ Return to the main menu.`,
  sendMemberUnbanLimit: () =>
    "Enter the number of members a moderator can unban",
  // Anti create webhook
  titleAntiCreateWebhook: () => "Anti creation of webhooks :",
  descriptionAntiCreateWebhook: (guildData, message) => `
**1)** ${
    guildData.anticreatewebhook.enabled
      ? `The plugin is activated. ${emojis.enabled}\nSince <t:${Math.round(
          guildData.anticreatewebhook.since / 1000
        )}:F>`
      : `The plugin is disabled. ${emojis.disabled}`
  }

**2)** Punishment: **${guildData.anticreatewebhook.sanction}**

**3)** After how many webhooks are created the anti raid work: **${
    guildData.anticreatewebhook.maxaction
  }**

**4)** Is the whitelist included? **${
    guildData.anticreatewebhook.whitelistcompte ? "Yes" : "No"
  }**
***(If the whitelist is not included, a whitelist member who creates a webhook will be punished.)***

**5)** Reset the number of actions of the punished member: **${
    guildData.anticreatewebhook.resetactions ? "Yes" : "No"
  }**

↩️ Return to the main menu.`,
  sendMemberWebhookCreateLimit: () =>
    "Enter the number of webhook that a member can create",
  // Anti give permissions
  titleAntiGivePermissions: () => "Anti give permissions :",
  descriptionAntiGivePermissions: (guildData, message) => `
**1)** ${
    guildData.givepermission.enabled
      ? `The plugin is activated. ${emojis.enabled}\nSince <t:${Math.round(
          guildData.givepermission.since / 1000
        )}:F>`
      : `The plugin is disabled. ${emojis.disabled}`
  }

**2)** Punishment: **${guildData.givepermission.sanction}**

**3)** After how many permissions given the anti raid work: **${
    guildData.givepermission.maxaction
  }**

**4)** Is the whitelist included? **${
    guildData.givepermission.whitelistcompte ? "Yes" : "No"
  }**
***(If the whitelist is not included, a whitelist member who gives permission will be punished.)***

**5)** Reset the number of actions of the punished member: **${
    guildData.givepermission.resetactions ? "Yes" : "No"
  }**

**6)** Roles ignored by the anti raid (These roles can be given)

↩️ Return to the main menu.`,
  sendMemberGivePermissionsLimit: () =>
    "Enter the number of permissions a member can give",
  // Sun reaction
  menu: () => "Menu :",
  optionsRoles: () =>
    `**1)** Add a role to ignore\n**2)** Remove a role to ignore\n**3)** List of ignored roles`,
  ignoredRoles: (guildData) =>
    `Roles ignored - (${guildData.givepermission.rolesauth.length})`,
  addIgnoredRoles: () => "Please mention the role to be ignored!",
  roleNotFound: () => "This role cannot be found!",
  alreadyIgnored: () => "This role is already in the ignored roles",
  addedIgnoredRole: (role) => `${role.name} has been added to the ignored roles!`,
  removeIgnoredRoles: () => "Please mention the role to be removed!",
  notIgnored: () => "This role is not in the ignored roles",
  removedIgnoredRole: (role) => `${role.name} has been removed from the ignored roles!`,
  // Anti change url
  titleAntiChangeURL: () => "Anti editing of the custom url :",
  descriptionAntiChangeURL: (guildData, message) => `
**1)** ${
    guildData.changeurlserver.enabled
      ? `The plugin is activated. ${emojis.enabled}\nSince <t:${Math.round(
          guildData.changeurlserver.since / 1000
        )}:F>`
      : `The plugin is disabled. ${emojis.disabled}`
  }

**2)** Punishment: **${guildData.changeurlserver.sanction}**

**3)** After how many changes of the url the anti raid work: **${
    guildData.changeurlserver.maxaction
  }**

**4)** Is the whitelist included? **${
    guildData.changeurlserver.whitelistcompte ? "Yes" : "No"
  }**
***(If the whitelist is not included, a whitelist member who modifies the url will be punished.)***

**5)** Reset the number of actions of the punished member: **${
    guildData.changeurlserver.resetactions ? "Yes" : "No"
  }**

↩️ Return to the main menu.`,
  sendChangeURLLimit: () =>
    "Enter the number of times an administrator can change the url",
  // Anti role modification
  titleAntiRoleModification: () => "Anti modification of roles :",
  descriptionAntiRoleModification: (guildData, message) => `
**1)** ${
    guildData.antichangerole.enabled
      ? `The plugin is activated. ${emojis.enabled}\nSince <t:${Math.round(
          guildData.antichangerole.since / 1000
        )}:F>`
      : `The plugin is disabled. ${emojis.disabled}`
  }

**2)** Punishment: **${guildData.antichangerole.sanction}**

**3)** After how many permissions of changed roles the anti raid work: **${
    guildData.antichangerole.maxaction
  }**

**4)** Is the whitelist included? **${
    guildData.antichangerole.whitelistcompte ? "Yes" : "No"
  }**
***(If the whitelist is not included, a whitelist member who modifies a role will be punished.)***

**5)** Reset the number of actions of the punished member: **${
    guildData.antichangerole.resetactions ? "Yes" : "No"
  }**

↩️ Return to the main menu.`,
  sendRoleModificationLimit: () =>
    "Enter the number of times a member can modify a role",
  // Anti add bot
  titleAntiAddBot: () => "Anti bot :",
  descriptionAntiAddBot: (guildData, message) => `
**1)** ${
    guildData.antibot.enabled
      ? `The plugin is activated. ${emojis.enabled}\nSince <t:${Math.round(
          guildData.antibot.since / 1000
        )}:F>`
      : `The plugin is disabled. ${emojis.disabled}`
  }

**2)** Punishment: **${guildData.antibot.sanction}**

**3)** After how many bots added the anti raid work: **${
    guildData.antibot.maxaction
  }**

**4)** Is the whitelist included? **${
    guildData.antibot.whitelistcompte ? "Yes" : "No"
  }**
***(If the whitelist is not included, a whitelist member who adds a bot will be punished.)***

**5)** Reset the number of actions of the punished member: **${
    guildData.antibot.resetactions ? "Yes" : "No"
  }**

**6)** Allow only certified bots to join the server: **${
    guildData.antibot.onlyverif ? "Yes" : "No"
  }**

↩️ Return to the main menu.`,
  sendBotAddLimit: () => "Enter the number of bots a member can add",
};
