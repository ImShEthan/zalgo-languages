const { emojis } = require("../../../config");
module.exports = {
  join: {
    oauth2: (user) => `${user} as join the server using OAuth.`,
    vanity: (user) =>
      `${user} join the server with **the custom url** :\n`,
    unknown: (user) =>
      `**I can't find** how ${user} join the server :\n`,
    perm: (user) =>
      `${emojis.error} | I need the permission manage server for seing who invite ${user}.`,
  },
  leave: {
    oauth2: (user) =>
      `${user} have leave the server, he joined using OAuth.`,
    vanity: (user) =>
      `${user} have leave the server,  he joined using custom url !`,
    unknown: (user) =>
      `${user} have leave the server, I can't find how he joined.`,
    perm: (user) =>
      `${emojis.error} | I need the permission manage server for seing who invite ${user}.`,
  },
};
