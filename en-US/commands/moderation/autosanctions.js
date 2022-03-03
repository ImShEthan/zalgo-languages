const { emojis } = require("../../../../config");
module.exports = {
  title: () => `🚩 Auto Sanctions`,
  anySanctions: () => `Il n'y a aucune auto sanctions configurée`,

  questionDelete: () =>
    `Veuillez entrer l'id de la sanction que vous voulez supprimer \n \nTappez \`cancel\` pour annuler.`,
  question1: () =>
    `Quel est la sanction que vous souhaitez ? (Dites "1", "2" ou "3") \n\n1 = Mute \n2 = Kick\n3 = Ban \n \nTappez \`cancel\` pour annuler.`,
  question2: () =>
    `Au bout de combien d'avertissement cette sanction tombera ? \n \nTappez \`cancel\` pour annuler.`,
  question3: (s) =>
    `Combien de temps maximum entre les ${s} warns ? (10m maximum pour ${s})\n \nTappez \`cancel\` pour annuler.`,
  question4: () =>
    `Quelle va être la durée de la sanction ? \n \nTappez \`cancel\` pour annuler.`,

  cancel: () => `${emojis.error} | Annulé.`,
  btw14: () => `Veuillez enter un chiffre compris entre 1 et 3 !`,
  notValid: () => `Veuillez entrer un chiffre !`,
  notValidDate: () =>
    "Date invalide. Veuillez utiliser comme unité : `d`, `y`, `m`, `s`",
  IDInvalid: () => `L'identifiant spécifié est invalide !`,
  tomany: () => `Vous ne pouvez pas créer plus de 15 sanctions automatiques !`,
};
