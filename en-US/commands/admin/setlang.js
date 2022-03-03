const { emojis } = require("../../../../config");
module.exports = {
  invalid: () =>
    `${emojis.error} | You must enter a valid language!\n\n:flag_fr: French (\`fr\`) \n:flag_gb: English (\`en\`)`,
  success: () => `${emojis.success} | Language updated!`,
};
