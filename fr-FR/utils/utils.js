const { emojis } = require("../../../config");
module.exports = {
  vote: () =>
    `**Vous aimez Zalgo ?**\nAllez voter pour lui sur Top.gg pour pouvoir accéder à cette commande !\n\nhttps://top.gg/bot/710135804714024962/vote`,
  page: () => `Page`,
  noButton: (prefix) =>
    `Faites la commande \`${prefix}addbot\` pour avoir les liens du bot !`,

  next: () => `Page suivante`,
  previous: () => `Page précédente`,
  reasonWarns: () => `Trop de warns`,

  variables: () => `
\`\`\`--- Informations sur l'user : ---

Mention de l'user : {user}
Id de l'user : {user.id}
Tag de l'user : {user.tag}
Nom de l'user : {user.name}
Date de création de l'user : {user.createdat}
Date de création de l'user en Unix Timestamp : {user.createdattimestamp}

--- Informations sur l'inviteur : ---

Mention de l'inviteur : {inviter}
Id de l'inviteur : {inviter.id}
Tag de l'inviteur : {inviter.tag}
Nom de l'inviteur : {inviter.name}
Nombre d'invitations : {inviter.invitations}

--- Informations sur l'invitation : ---

Code d'invitation : {invite.code}
Nombre d'utilisation : {invite.uses}

--- Informations sur le serveur : ---

Membres totaux : {membercount}
Serveur : {server}\`\`\``,

  wait: () => `${emojis.loading} | Veuillez patienter...`,
  prefix: (prefix) =>
    `Bonjour! Merci d'utiliser **${prefix}help** pour voir toutes les commandes !`,

  maintenance: () =>
    `${emojis.warn} | Le bot est actuellement en maintenance !`,
  slowmode: () =>
    `${emojis.error} | Veuillez patienter un moment avant de faire une commande !\n***${emojis.warn} Plus vous faites une commande alors que vous êtes en cooldown, plus l'attente de pouvoir faire une nouvelle commande sera longue !***`,
  slowmode1: () =>
    `${emojis.error} | Veuillez patienter un moment avant de mentionner le bot !\n***${emojis.warn} Plus vous faites une commande alors que vous êtes en cooldown, plus l'attente de pouvoir faire une nouvelle commande sera longue !***`,

  specialMessages: require("./special-messages.js"),
};
