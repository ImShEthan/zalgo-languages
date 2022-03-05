const { emojis } = require("../../../../config");
module.exports = {
  noVoice: () =>
    `${emojis.error} | You must be connected to a voice channel to launch an activity!`,
  go: () => `Click on the invitation link to start the activity!`,
};
