const { emojis } = require("../../../../config");
module.exports = {
  description: (message, guildData) => `                     
**1)** Empêcher l 'envoie de messages avec mentions excessives\n${
    guildData.enabled
      ? `${emojis.enabled} Activé\nDepuis le <t:${Math.round(
          Number(guildData.since) / 1000
        )}:F>`
      : `${emojis.disabled} Désactivé`
  }
              
**2)** Nombre de mentions maximum\n**${Number(
    guildData.number
  )}** mentions maximum
  
**3)** Ignorer des salons pour l'envoie de messages avec mentions excessives`,

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

  mentionQuestion: () => `Entrez le nombre de mentions maximum par message`,
  errorQuestion: () => `Entrez un nombre valide !`,
  errorQuestion1: () => "Entrez un chiffre au dessus de 1 !",
};
