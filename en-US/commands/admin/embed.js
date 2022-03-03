const { emojis } = require("../../../../config");
module.exports = {
  wait: () => `${emojis.loading} | Veuillez patienter...`,
  image: () => "Quelle image souhaitez ajouter à votre embed ?",
  titre: () => "Quel titre souhaitez ajouter à votre embed ?",
  desc: () => "Quel description souhaitez ajouter à votre embed ?",
  url: () => "Quelle URL souhaitez ajouter à votre embed ?",
  errorurl: () =>
    `${emojis.error} Veuillez envoyer un lien de type \`http\` ou \`https\``,
  footer: () => "Quel footer souhaitez ajouter à votre embed ?",
  thumbnail: () => "Quelle thumbnail souhaitez ajouter à votre embed ?",
  couleur: () => "Quelle couleur souhaitez ajouter à votre embed ?",
  author1: () => "Quel nom d'auteur souhaitez ajouter à votre embed ?",
  author2: () => "Quelle image d'auteur souhaitez ajouter à votre embed ?",
  fake: () => `${emojis.success} | Création de l\'embed annulé avec succès !`,
  question: () => "Dans quel salon voulez vous que j'envoie l'embed ?",
  nofind: () => `${emojis.error} **Je ne trouve pas ce salon.**`,
  success: (channel) =>
    `${emojis.success} | Embed créé avec succès et envoyé avec succès dans le salon <#${channel}>`,

  addFieldTitle: () => `Veuillez envoyer le titre de votre field !`,
  addFieldDesc: () => `Veuillez envoyer la description de votre field !`,
  removeField: () => `Veuillez entrer le chiffre du field à supprimer !`,
  removeFieldError: () => `Veuillez entrer un chiffre valide !`,
  textTro: () => `Votre message est trop grand !`,

  webhook: {
    cancel: () => `${emojis.error} | Annulé`,

    question1: () =>
      `${emojis.roles} | Veuillez envoyer le salon !\n\nTapez \`cancel\` pour annuler.`,
    error1: (confChannel) =>
      `Aucun salon trouver pour \`${confChannel.content}\``,

    question2: () =>
      `${emojis.roles} | Veuillez envoyer le nom du webhook que vous souhaitez !\n\nTapez \`cancel\` pour annuler.`,
    question3: () =>
      `${emojis.roles} | Veuillez envoyer la photo du webhook que vous souhaitez !\n\nTapez \`cancel\` pour annuler.`,
    error: () => `${emojis.error} | Impossible de créer un webhook !`,
  },
};
