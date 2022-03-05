const { emojis } = require("../../../../config");
module.exports = {
  wait: () => `${emojis.loading} | Reset the currents levels...`,
  reset: () => `${emojis.success} | Reset done !`,
};
// d