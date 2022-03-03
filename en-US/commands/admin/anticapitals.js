const { emojis } = require("../../../../config");
module.exports = {
  description: (message, guildData) => `                     
**1)** Empêcher l'envoie de messages avec majuscules excessives\n${
    guildData.enabled
      ? `${emojis.enabled} Activé\nDepuis le <t:${Math.round(
          guildData.since / 1000
        )}:F>`
      : `${emojis.disabled} Désactivé`
  }

**2)** Ignorer des salons pour l'envoie avec majuscules excessives`,

  listDescription: () =>
    `**1)** Ajouter un salon à ignorer\n**2)** Enlever un salon à ignorer\n**3)** Liste des salons ignorés`,

  title: (count) => `Salons ignorés - (${count})`,

  noFoundChannel: () => `Ce salon est introuvable !`,

  addChannelQuestion: () => `Veuillez mentionner le salon à ignorer !`,
  channelAlreadyExist: () => `Ce salon est déjà dans les salons ignorés`,
  successAdd: (salon) => `${salon} a été ajouté aux salons ignorés !`,

  removeChannelQuestion: () => `Veuillez mentionner le salon retirer !`,
  channelAlreadyNoExist: () => `Ce salon n'est pas dans les salons ignorés`,
  successRemove: (salon) => `${salon} a été retiré des salons ignorés !`,
};
