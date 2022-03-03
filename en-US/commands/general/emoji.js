const { emojis } = require("../../../../config");
module.exports = {
  noArgs: () => `${emojis.error} | Veuillez fournir un emoji !`,
  noEmoji: () => `${emojis.error} | Emoji introuvable !`,

  infos: (infos) =>
    `**Nom:** \`${infos.name}\`\n**ID:** \`${infos.id}\`\n**Animé:** \`${
      infos.animated ? "Oui" : "Non"
    }\`\n\`${infos.unicode}\`${
      infos.emojiServer ? `\n**Créé le:** \`${infos.createdAt}\`` : ""
    }\n\n${infos.link}`,
};
