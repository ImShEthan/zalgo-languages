const { emojis } = require("../../../../config");
module.exports = {
  desc: (message) => `The channel was created by ${message.author}.`,
  button: () => `Resend pinned messages`,
};
