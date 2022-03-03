const { emojis } = require("../../../../config");
module.exports = {
  desc: (message) => `Le salon a été recréé par ${message.author}.`,
  button: () => `Renvoyer les messages épinglés`,
};
