const { emojis } = require("../../../../config");
module.exports = {
  description: (message, guildData) => `                     
**1)** Empêcher l 'envoie de messages full émojis\n${
    guildData.enabled
      ? `${emojis.enabled} Activé\nDepuis le <t:${Math.round(
          guildData.since / 1000
        )}:F>`
      : `${emojis.disabled} Désactivé`
  }
            
**2)** Nombre d'émojis maximum\n**${Number(guildData.number)}** émojis maximum

**3)** Ignorer des salons pour l'envoie des mass émojis`,

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

  mentionQuestion: () => `Entrez le nombre d'émojis maximum par message`,
  errorQuestion: () => `Entrez un nombre valide !`,
  errorQuestion1: () => "Entrez un chiffre au dessus de 1 !",
};
