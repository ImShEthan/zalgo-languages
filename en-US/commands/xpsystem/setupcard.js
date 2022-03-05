const { emojis } = require("../../../../config");
module.exports = {
  desc: (data) => `
**1)** Image (See the image of the embed)
${data.background ? data.background : "No image."}

**2)** Card color (See the side of the embed)
${data.color ? data.color : "No color."}

***IF YOUR IMAGE DOESN'T SHOW, IT WILL NOT WORK ON YOUR RANK CARD!***`,
  link: () =>
    "Please send the link of your image. (Ending with `png` or `jpg`)",
  color: () =>
    "Please send the color for your card. (Beginning with #)",
  invalidColor: () => "Your color does not contain a # !",
};
////d