const { emojis } = require("../../../../config");
module.exports = {
  question3: () => `How do you want to close the channel?`,
  slowmode: (message, time) =>
    `<:warn_mys:720681790133501962> | Slowly ${
      message.author.username
    }, you can redo this function in **${Math.ceil(
      (time - Date.now()) / 1000
    )} seconds !**`,
  lock: () => `${emojis.success} | Channel locked!`,

  question4: () => `How do you want to open a channel?`,
  unlock: () => `${emojis.success} | Channel unlocked!`,
};
