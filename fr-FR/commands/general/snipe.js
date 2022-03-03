const { emojis } = require("../../../../config");
module.exports = {
  noFoundMessage: () => `${emojis.error} | Aucun message trouvé !`,

  and: () => `***et plus...***`,

  embeds: () => `Embeds du message:`,
};
