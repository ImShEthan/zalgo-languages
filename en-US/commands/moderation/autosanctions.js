const { emojis } = require("../../../../config");
module.exports = {
  title: () => `🚩 Auto Sanctions`,
  anySanctions: () => `There are no auto sanctions configured`,

  questionDelete: () =>
    `Please enter the ID of the sanction you want to delete \n \nType \`cancel\` to cancel.`,
  question1: () =>
    `What is the sanction you want? (Say "1", "2" ou "3") \n\n1 = Mute \n2 = Kick\n3 = Ban \n \nType \`cancel\` to cancel.`,
  question2: () =>
    `After how many warnings will this sanction be applied? \n \nType \`cancel\` to cancel.`,
  question3: (s) =>
    `What is the maximum time between ${s} warns? (10m maximum for ${s})\n \nType \`cancel\` to cancel.`,
  question4: () =>
    `How long will the sanction last? \n \nType \`cancel\` to cancel.`,

  cancel: () => `${emojis.error} | Cancelled.`,
  btw14: () => `Please enter a number between 1 and 3!`,
  notValid: () => `Please enter a number!`,
  notValidDate: () =>
    "Invalid date. Please use as unit : `d`, `y`, `m`, `s`",
  IDInvalid: () => `The specified ID is invalid!`,
  tomany: () => `You can't create more than 15 automatic sanctions!`,
};
