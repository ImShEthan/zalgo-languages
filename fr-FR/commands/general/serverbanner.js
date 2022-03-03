const { emojis } = require("../../../../config");
module.exports = {
  error: () => `${emojis.error} | Ce serveur ne possède pas de bannière !`,
};
