const { emojis } = require("../../../../config");
module.exports = {
  joinVocal: () =>
    `${emojis.error} | Vous devez être connecté dans un salon vocal !`,
  missingPerms: () =>
    `${emojis.error} | Une erreur s'est produite. Soit je ne peux pas me connecter dans votre salon, soit je ne peux pas parler dans votre salon. Vérifiez mes permissions et réessayez.`,
  moove: () =>
    `${emojis.success} | Déplacez vous dans le salon où vous voulez déplacer tout le monde !`,
  success: () => `${emojis.success} | Salon moove.`,
  cancel: () => `${emojis.error} | Annulé.`,
};
