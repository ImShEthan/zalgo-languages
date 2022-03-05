const { emojis } = require("../../../../config");
module.exports = {
  noArgs: () => `${emojis.error} | Please provide an emoji!`,
  noEmoji: () => `${emojis.error} | Emoji not found!`,

  infos: (infos) =>
    `**Name:** \`${infos.name}\`\n**ID:** \`${infos.id}\`\n**Animated:** \`${
      infos.animated ? "Yes" : "No"
    }\`\n\`${infos.unicode}\`${
      infos.emojiServer ? `\n**Created on:** \`${infos.createdAt}\`` : ""
    }\n\n${infos.link}`,
};
