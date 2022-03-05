const { emojis } = require("../../../../config");
module.exports = {
  userNotFound: () =>
    `${emojis.error} | This person is not on the server or cannot be found!`,
  noChangeAvatars: () => `This member has never changed avatar before.`,

  question: () =>
    `**1)** Show all avatars\n**2)** Show avatars \`GIF\`\n**3)** Show avatars \`PNG\``,

  avatarChange: () => `Avatar changed on`,

  title1: (user) => `Avatars de ${user.tag}`,
  title2: (user) => `Avatars (GIF) of ${user.tag}`,
  title3: (user) => `Avatars (PNG) of ${user.tag}`,
};
