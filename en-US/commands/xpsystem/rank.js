const { emojis } = require("../../../../config");
module.exports = {
  noHere: () =>
    `${emojis.error} | This user is not on the server !`,
  cantCreateImage: (prefix) =>
    `${emojis.error} | I can't create the image ! Do \`${prefix}reset-card\` so I can create the image correctly.`,
};
// d