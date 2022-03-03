const { emojis } = require("../../../../config");
module.exports = {
  noVoice: () =>
    `${emojis.error} | Vous devez être connecté à un salon vocal pour lancer une activitée !`,
  go: () => `Cliquez sur le lien d'invitation pour lancer l'activitée !`,
};
