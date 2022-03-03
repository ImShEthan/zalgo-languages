const { emojis } = require("../../../../config");
module.exports = {
  wait: () => `${emojis.loading} | Reset des levels en cours...`,
  reset: () => `${emojis.success} | Reset effectué !`,
};
