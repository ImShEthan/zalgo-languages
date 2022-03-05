const { emojis } = require("../../../../config");
module.exports = {
  joinVocal: () =>
    `${emojis.error} | You must be connected in a voice channel!`,
  missingPerms: () =>
    `${emojis.error} | An error has occurred. I can either not log in to your channel or I can not talk in your channel. Check my permissions and try again.`,
  moove: () =>
    `${emojis.success} | Just move to the channel where you want to move everyone!`,
  success: () => `${emojis.success} | Channel moove.`,
  cancel: () => `${emojis.error} | Cancelled.`,
};
