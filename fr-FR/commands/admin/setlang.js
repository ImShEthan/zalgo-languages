const { emojis } = require("../../../../config");
module.exports = {
  invalid: () =>
    `${emojis.error} | Vous devez entrer une langue valide !\n\n:flag_fr: Français (\`fr\`) \n:flag_gb: English (\`en\`)`,
  success: () => `${emojis.success} | Langue mise à jour !`,
};
