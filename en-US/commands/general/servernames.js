const { emojis } = require("../../../../config");
module.exports = {
  noChange: () =>
    `${emojis.error} | Ce serveur n'a encore jamais changé de nom !`,
  total: () => `Total des anciens noms :`,
};
