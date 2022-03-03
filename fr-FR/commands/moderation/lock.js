const { emojis } = require("../../../../config");
module.exports = {
  question3: () => `Quel salon voulez-vous fermer ?`,
  slowmode: (message, time) =>
    `<:warn_mys:720681790133501962> | Doucement ${
      message.author.username
    }, tu peux refaire cette fonction dans **${Math.ceil(
      (time - Date.now()) / 1000
    )} secondes !**`,
  lock: () => `${emojis.success} | Salon verrouillé !`,

  question4: () => `Quel salon voulez-vous ouvrir ?`,
  unlock: () => `${emojis.success} | Salon déverrouillé !`,
};
