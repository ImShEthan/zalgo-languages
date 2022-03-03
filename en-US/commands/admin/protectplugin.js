const { emojis } = require("../../../../config");
module.exports = {
  // Main
  mainEmbedDescription: () => `
**1)** Empêcher la création de salons
          
**2)** Empêcher la suppression de salons
          
**3)** Empêcher la création de rôles
          
**4)** Empêcher la suppression de rôles
          
**5)** Empêcher la possibilité de ban
          
**6)** Empêcher la possibilité d'unban
          
**7)** Empêcher la création de webhooks
          
**8)** Empêcher la possibilité de donner un rôle avec une grosse permission \n*(ex: Administrateur, gérer le serveur, donner des rôles, ect...)*
          
**9)** Empêcher la modification de l'url personnalisé
          
**10)** Empêcher la modification d'un rôle
          
**11)** Empêcher l'ajout des bots`,
  // Anti create channel
  titleAntiChannel: () => "Anti création de salons :",
  descriptionAntiChannel: (guildData, message) => `
**1)** ${
    guildData.anticreatechannel.enabled
      ? `Le plugin est activé. ${emojis.enabled}\nDepuis le <t:${Math.round(
          guildData.anticreatechannel.since / 1000
        )}:F>`
      : `Le plugin est désactivé. ${emojis.disabled}`
  }

**2)** Sanction: **${guildData.anticreatechannel.sanction}**

**3)** Au bout de combien de salons créés l'anti raid agit: **${
    guildData.anticreatechannel.maxaction
  }**

**4)** La whitelist est prise en compte ? **${
    guildData.anticreatechannel.whitelistcompte ? "Oui" : "Non"
  }**
***(Si la whitelist n'est pas prise en compte, un membre whitelist qui créé un salon sera sanctionné.)***

**5)** Reset le nombre d'actions de la personne sanctionnée: **${
    guildData.anticreatechannel.resetactions ? "Oui" : "Non"
  }**

↩️ Retourner au menu principal.`,
  sendMemberChannelLimit: () =>
    "Entrez le nombre de salons qu'un membre peux créer",
  // Settings & general
  chooseSanction: () =>
    "__**Veuillez choisir la sanction:**__\n\n1️⃣ Derank\n2️⃣ Kick\n3️⃣ Ban",
  validNumber: () => "Entrez un nombre valide !",
  above1: () => "Entrez un chiffre au dessus de 1 !",
  // Anti delete channel
  titleAntiDeleteChannel: () => "Anti suppression de salons :",
  descriptionAntiDeleteChannel: (guildData, message) => `
**1)** ${
    guildData.antideletechannel.enabled
      ? `Le plugin est activé. ${emojis.enabled}\nDepuis le <t:${Math.round(
          guildData.antideletechannel.since / 1000
        )}:F>`
      : `Le plugin est désactivé. ${emojis.disabled}`
  }

**2)** Sanction: **${guildData.antideletechannel.sanction}**

**3)** Au bout de combien de salons supprimés l'anti raid agit: **${
    guildData.antideletechannel.maxaction
  }**

**4)** La whitelist est prise en compte ? **${
    guildData.antideletechannel.whitelistcompte ? "Oui" : "Non"
  }**
***(Si la whitelist n'est pas prise en compte, un membre whitelist qui supprime un salon sera sanctionné.)***

**5)** Reset le nombre d 'actions de la personne sanctionnée: **${
    guildData.antideletechannel.resetactions ? "Oui" : "Non"
  }**

**6)** Re-créer le salon: **${
    guildData.antideletechannel.recreatechannel ? "Oui" : "Non"
  }**

↩️ Retourner au menu principal.`,
  sendMemberChannelDeleteLimit: () =>
    "Entrez le nombre de salons qu'un membre peux supprimer",
  // Anti role creation
  titleAntiRoleCreation: () => "Anti création de rôles :",
  descriptionAntiRoleCreation: (guildData, message) => `
**1)** ${
    guildData.anticreaterole.enabled
      ? `Le plugin est activé. ${emojis.enabled}\nDepuis le <t:${Math.round(
          guildData.anticreaterole.since / 1000
        )}:F>`
      : `Le plugin est désactivé. ${emojis.disabled}`
  }

**2)** Sanction: **${guildData.anticreaterole.sanction}**

**3)** Au bout de combien de rôles créés l'anti raid agit: **${
    guildData.anticreaterole.maxaction
  }**

**4)** La whitelist est prise en compte ? **${
    guildData.anticreaterole.whitelistcompte ? "Oui" : "Non"
  }**
***(Si la whitelist n'est pas prise en compte, un membre whitelist qui créé un rôle sera sanctionné.)***

**5)** Reset le nombre d'actions de la personne sanctionnée: **${
    guildData.anticreaterole.resetactions ? "Oui" : "Non"
  }**

↩️ Retourner au menu principal.`,
  sendMemberRoleCreateLimit: () =>
    "Entrez le nombre de rôles qu'un membre peux créer",
  // Anti role delete
  titleAntiRoleDelete: () => "Anti suppression de rôles :",
  descriptionAntiRoleDelete: (guildData, message) => `
**1)** ${
    guildData.antideleterole.enabled
      ? `Le plugin est activé. ${emojis.enabled}\nDepuis le <t:${Math.round(
          guildData.antideleterole.since / 1000
        )}:F>`
      : `Le plugin est désactivé. ${emojis.disabled}`
  }

**2)** Sanction: **${guildData.antideleterole.sanction}**

**3)** Au bout de combien de rôles supprimés l'anti raid agit: **${
    guildData.antideleterole.maxaction
  }**

**4)** La whitelist est prise en compte ? **${
    guildData.antideleterole.whitelistcompte ? "Oui" : "Non"
  }**
***(Si la whitelist n'est pas prise en compte, un membre whitelist qui supprime un rôle sera sanctionné.)***

**5)** Reset le nombre d 'actions de la personne sanctionnée: **${
    guildData.antideleterole.resetactions ? "Oui" : "Non"
  }**

**6)** Re-créer le rôle: **${
    guildData.antideleterole.recreatechannel ? "Oui" : "Non"
  }**

↩️ Retourner au menu principal.`,
  sendMemberRoleDeleteLimit: () =>
    "Entrez le nombre de rôles qu'un membre peux supprimer",
  // Anti ban
  titleAntiBan: () => "Anti ban :",
  descriptionAntiBan: (guildData, message) => `
**1)** ${
    guildData.antiban.enabled
      ? `Le plugin est activé. ${emojis.enabled}\nDepuis le <t:${Math.round(
          guildData.antiban.since / 1000
        )}:F>`
      : `Le plugin est désactivé. ${emojis.disabled}`
  }

**2)** Sanction: **${guildData.antiban.sanction}**

**3)** Au bout de combien de bans l'anti raid agit: **${
    guildData.antiban.maxaction
  }**

**4)** La whitelist est prise en compte ? **${
    guildData.antiban.whitelistcompte ? "Oui" : "Non"
  }**
***(Si la whitelist n'est pas prise en compte, un membre whitelist qui ban sera sanctionné.)***

**5)** Reset le nombre d'actions de la personne sanctionnée: **${
    guildData.antiban.resetactions ? "Oui" : "Non"
  }**

**6)** Unban le membre banni: **${
    guildData.antiban.unbanmember ? "Oui" : "Non"
  }**

↩️ Retourner au menu principal.`,
  sendMemberBanLimit: () =>
    "Entrez le nombre de membres qu'un modérateur peux ban",
  // Anti unban
  titleAntiUnban: () => "Anti unban :",
  descriptionAntiUnban: (guildData, message) => `
**1)** ${
    guildData.antiunban.enabled
      ? `Le plugin est activé. ${emojis.enabled}\nDepuis le <t:${Math.round(
          guildData.antiunban.since / 1000
        )}:F>`
      : `Le plugin est désactivé. ${emojis.disabled}`
  }

**2)** Sanction: **${guildData.antiunban.sanction}**

**3)** Au bout de combien d'unbans l'anti raid agit: **${
    guildData.antiunban.maxaction
  }**

**4)** La whitelist est prise en compte ? **${
    guildData.antiunban.whitelistcompte ? "Oui" : "Non"
  }**
***(Si la whitelist n'est pas prise en compte, un membre whitelist qui unban sera sanctionné.)***

**5)** Reset le nombre d'actions de la personne sanctionnée: **${
    guildData.antiunban.resetactions ? "Oui" : "Non"
  }**

**6)** Ban le membre unban: **${guildData.antiunban.banmember ? "Oui" : "Non"}**

↩️ Retourner au menu principal.`,
  sendMemberUnbanLimit: () =>
    "Entrez le nombre de membres qu'un modérateur peux débannir",
  // Anti create webhook
  titleAntiCreateWebhook: () => "Anti création de webhooks :",
  descriptionAntiCreateWebhook: (guildData, message) => `
**1)** ${
    guildData.anticreatewebhook.enabled
      ? `Le plugin est activé. ${emojis.enabled}\nDepuis le <t:${Math.round(
          guildData.anticreatewebhook.since / 1000
        )}:F>`
      : `Le plugin est désactivé. ${emojis.disabled}`
  }

**2)** Sanction: **${guildData.anticreatewebhook.sanction}**

**3)** Au bout de combien de webhooks créés l'anti raid agit: **${
    guildData.anticreatewebhook.maxaction
  }**

**4)** La whitelist est prise en compte ? **${
    guildData.anticreatewebhook.whitelistcompte ? "Oui" : "Non"
  }**
***(Si la whitelist n'est pas prise en compte, un membre whitelist qui créé un webhook sera sanctionné.)***

**5)** Reset le nombre d'actions de la personne sanctionnée: **${
    guildData.anticreatewebhook.resetactions ? "Oui" : "Non"
  }**

↩️ Retourner au menu principal.`,
  sendMemberWebhookCreateLimit: () =>
    "Entrez le nombre de webhook qu'un membre peux créer",
  // Anti give permissions
  titleAntiGivePermissions: () => "Anti give permissions :",
  descriptionAntiGivePermissions: (guildData, message) => `
**1)** ${
    guildData.givepermission.enabled
      ? `Le plugin est activé. ${emojis.enabled}\nDepuis le <t:${Math.round(
          guildData.givepermission.since / 1000
        )}:F>`
      : `Le plugin est désactivé. ${emojis.disabled}`
  }

**2)** Sanction: **${guildData.givepermission.sanction}**

**3)** Au bout de combien de permissions donnés l'anti raid agit: **${
    guildData.givepermission.maxaction
  }**

**4)** La whitelist est prise en compte ? **${
    guildData.givepermission.whitelistcompte ? "Oui" : "Non"
  }**
***(Si la whitelist n'est pas prise en compte, un membre whitelist qui donne une permission sera sanctionné.)***

**5)** Reset le nombre d'actions de la personne sanctionnée: **${
    guildData.givepermission.resetactions ? "Oui" : "Non"
  }**

**6)** Rôles ignorés par l'anti raid (Ces rôles pourront être donnés)

↩️ Retourner au menu principal.`,
  sendMemberGivePermissionsLimit: () =>
    "Entrez le nombre de permissions qu'un membre peux donner",
  // Sun reaction
  menu: () => "Menu :",
  optionsRoles: () =>
    `**1)** Ajouter un rôle à ignorer\n**2)** Enlever un rôle à ignorer\n**3)** Liste des rôles ignorés`,
  ignoredRoles: (guildData) =>
    `Rôles ignorés - (${guildData.givepermission.rolesauth.length})`,
  addIgnoredRoles: () => "Veuillez mentionner le rôle à ignorer !",
  roleNotFound: () => "Ce rôle est introuvable !",
  alreadyIgnored: () => "Ce rôle est déjà dans les rôles ignorés",
  addedIgnoredRole: (role) => `${role.name} a été ajouté aux rôles ignorés !`,
  removeIgnoredRoles: () => "Veuillez mentionner le rôle à enlever !",
  notIgnored: () => "Ce rôle n'est pas dans les rôles ignorés",
  removedIgnoredRole: (role) => `${role.name} a été retiré des rôles ignorés !`,
  // Anti change url
  titleAntiChangeURL: () => "Anti modification de l'url perso :",
  descriptionAntiChangeURL: (guildData, message) => `
**1)** ${
    guildData.changeurlserver.enabled
      ? `Le plugin est activé. ${emojis.enabled}\nDepuis le <t:${Math.round(
          guildData.changeurlserver.since / 1000
        )}:F>`
      : `Le plugin est désactivé. ${emojis.disabled}`
  }

**2)** Sanction: **${guildData.changeurlserver.sanction}**

**3)** Au bout de combien de changements de l'url l'anti raid agit: **${
    guildData.changeurlserver.maxaction
  }**

**4)** La whitelist est prise en compte ? **${
    guildData.changeurlserver.whitelistcompte ? "Oui" : "Non"
  }**
***(Si la whitelist n'est pas prise en compte, un membre whitelist qui modifie l'url sera sanctionné.)***

**5)** Reset le nombre d'actions de la personne sanctionnée: **${
    guildData.changeurlserver.resetactions ? "Oui" : "Non"
  }**

↩️ Retourner au menu principal.`,
  sendChangeURLLimit: () =>
    "Entrez le nombre de fois qu'un administrateur peut changer l'url",
  // Anti role modification
  titleAntiRoleModification: () => "Anti modification des rôles :",
  descriptionAntiRoleModification: (guildData, message) => `
**1)** ${
    guildData.antichangerole.enabled
      ? `Le plugin est activé. ${emojis.enabled}\nDepuis le <t:${Math.round(
          guildData.antichangerole.since / 1000
        )}:F>`
      : `Le plugin est désactivé. ${emojis.disabled}`
  }

**2)** Sanction: **${guildData.antichangerole.sanction}**

**3)** Au bout de combien de permissions de rôles changés l'anti raid agit: **${
    guildData.antichangerole.maxaction
  }**

**4)** La whitelist est prise en compte ? **${
    guildData.antichangerole.whitelistcompte ? "Oui" : "Non"
  }**
***(Si la whitelist n'est pas prise en compte, un membre whitelist qui modifie un rôle sera sanctionné.)***

**5)** Reset le nombre d'actions de la personne sanctionnée: **${
    guildData.antichangerole.resetactions ? "Oui" : "Non"
  }**

↩️ Retourner au menu principal.`,
  sendRoleModificationLimit: () =>
    "Entrez le nombre de fois qu'un membre peux modifier un rôle",
  // Anti add bot
  titleAntiAddBot: () => "Anti bot :",
  descriptionAntiAddBot: (guildData, message) => `
**1)** ${
    guildData.antibot.enabled
      ? `Le plugin est activé. ${emojis.enabled}\nDepuis le <t:${Math.round(
          guildData.antibot.since / 1000
        )}:F>`
      : `Le plugin est désactivé. ${emojis.disabled}`
  }

**2)** Sanction: **${guildData.antibot.sanction}**

**3)** Au bout de combien de bots ajoutés l'anti raid agit: **${
    guildData.antibot.maxaction
  }**

**4)** La whitelist est prise en compte ? **${
    guildData.antibot.whitelistcompte ? "Oui" : "Non"
  }**
***(Si la whitelist n'est pas prise en compte, un membre whitelist qui ajoute un bot sera sanctionné.)***

**5)** Reset le nombre d'actions de la personne sanctionnée: **${
    guildData.antibot.resetactions ? "Oui" : "Non"
  }**

**6)** N'autoriser que les bots certifiés à rejoindre le serveur: **${
    guildData.antibot.onlyverif ? "Oui" : "Non"
  }**

↩️ Retourner au menu principal.`,
  sendBotAddLimit: () => "Entrez le nombre de bots que peut ajouter un membre",
};
