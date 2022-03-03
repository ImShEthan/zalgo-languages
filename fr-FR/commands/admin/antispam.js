const { emojis } = require("../../../../config");
module.exports = {
  description: (message, guildData) => `
**1)** Anti-spam\n${
    guildData.enabled
      ? `${emojis.enabled} Activé\nDepuis le <t:${Math.round(
          Number(guildData.since) / 1000
        )}:F>`
      : `${emojis.disabled} Désactivé`
  }

**2)** Ignorer les bots\n${
    guildData.ignorebots
      ? `${emojis.enabled} Activé`
      : `${emojis.disabled} Désactivé`
  }

**3)** Configurer les rôles ignorés

**4)** Configurer les salons ignorés

**5)** Interval de messages\n**${message.language.convertMs(
    Number(guildData.maxinterval)
  )}**

**6)** Supprimer les messages\n${
    guildData.deletemessages
      ? `${emojis.enabled} Activé`
      : `${emojis.disabled} Désactivé`
  }

**7)** A combien de messages un membre se fait **avertir** ?\n**${Number(
    guildData.maxduplicateswarn
  )}** messages spam

**8)** A combien d 'avertissements un membre se fait **mute** ?\n**${Number(
    guildData.maxduplicatesmute
  )}** avertissements

**9)** Temps du mute\n**${message.language.convertMs(
    Number(guildData.timemute)
  )}**

**10)** Activé des paramètres pour un anti-spam plus performant
`,

  questionTime: () => `Veuillez entrer le temps du mute !`,
  invalidTimes: () =>
    `${emojis.error} | Vous devez entrer un temps valide ! Unités valides : \`s\`, \`m\`, \`h\`, \`d\`, \`w\`, \`y\``,

  advertMessages: () =>
    `Au bout de combien de messages un membre se fait avertir ?`,
  errorQuestion: () => `Entrez un nombre valide !`,
  errorQuestion: () => `Entrez un chiffre au dessus de 1 !`,

  question1: () =>
    `Au bout de combien d'avertissements un membre se fait mute ?`,

  interval: () => `Veuillez envoyer l'interval ! (ex: 3s)`,

  listDescriptionRole: () =>
    `
**1)** Ajouter un rôle à ignorer
**2)** Enlever un rôle à ignorer

**3)** Ajouter un salon à ignorer
**4)** Enlever un salon à ignorer`,

  titleRole: (count) => `Rôles ignorés - (${count})`,

  noFoundRole: () => `Ce rôle est introuvable !`,

  addRoleQuestion: () => `Veuillez mentionner le rôle à ignorer !`,
  roleAlreadyExist: () => `Ce salon est déjà dans les rôles ignorés`,
  successAddRole: (salon) => `${salon} a été ajouté aux rôles ignorés !`,

  removeRoleQuestion: () => `Veuillez mentionner le rôle retirer !`,
  roleAlreadyNoExist: () => `Ce rôle n'est pas dans les rôles ignorés`,
  successRemoveRole: (salon) => `${salon} a été retiré des rôles ignorés !`,

  listDescription: () =>
    `
**1)** Ajouter un rôle à ignorer
**2)** Enlever un rôle à ignorer

**3)** Ajouter un salon à ignorer
**4)** Enlever un salon à ignorer`,

  title: (count) => `Salons ignorés - (${count})`,

  noFoundChannel: () => `Ce salon est introuvable !`,
  returnmainmenu: () => `Retour au menu principal`,
  addChannelQuestion: () => `Veuillez mentionner le salon à ignorer !`,
  channelAlreadyExist: () => `Ce salon est déjà dans les salons ignorés`,
  successAdd: (salon) => `${salon} a été ajouté aux salons ignorés !`,

  removeChannelQuestion: () => `Veuillez mentionner le salon retirer !`,
  channelAlreadyNoExist: () => `Ce salon n'est pas dans les salons ignorés`,
  successRemove: (salon) => `${salon} a été retiré des salons ignorés !`,
};
