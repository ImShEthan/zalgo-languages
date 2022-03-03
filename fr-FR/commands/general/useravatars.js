const { emojis } = require("../../../../config");
module.exports = {
  userNotFound: () =>
    `${emojis.error} | Cette personne n'est pas sur le serveur ou est introuvable !`,
  noChangeAvatars: () => `Ce membre n'a encore jamais changé d'avatar.`,

  question: () =>
    `**1)** Afficher tous les avatars\n**2)** Afficher les avatars \`GIF\`\n**3)** Afficher les avatars \`PNG\``,

  avatarChange: () => `Avatar changé le`,

  title1: (user) => `Avatars de ${user.tag}`,
  title2: (user) => `Avatars (GIF) de ${user.tag}`,
  title3: (user) => `Avatars (PNG) de ${user.tag}`,
};
