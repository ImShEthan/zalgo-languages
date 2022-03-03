const { emojis } = require("../../../config");
module.exports = {
  join: {
    oauth2: (user) => `${user} a rejoint le serveur via OAuth.`,
    vanity: (user) =>
      `${user} a rejoint le serveur avec **l'invitation personnalisée** :\n`,
    unknown: (user) =>
      `**Je n'arrive pas à trouver** comment ${user} a rejoint le serveur :\n`,
    perm: (user) =>
      `${emojis.error} | J'ai besoin d'avoir les permissions de gérer le serveur pour savoir qui a invité ${user}.`,
  },
  leave: {
    oauth2: (user) =>
      `${user} a quitté le serveur, il avait rejoint via OAuth.`,
    vanity: (user) =>
      `${user} a quitté le serveur, il avait rejoint avec l'invitation personnalisée !`,
    unknown: (user) =>
      `${user} a quitté le serveur, mais je n'arrive pas à trouver comment il l'avait rejoint.`,
    perm: (user) =>
      `${emojis.error} | J'ai besoin d'avoir les permissions de gérer le serveur pour savoir qui a invité ${user}.`,
  },
};
