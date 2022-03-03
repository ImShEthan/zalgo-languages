const { emojis } = require("../../../../config");
module.exports = {
  userNotFound: () =>
    `${emojis.error} | Veuillez mentionner un membre valide !`,
  userIsBot: () => `${emojis.error} | Cet utilisateur est un bot !`,
  noSanctions: () => `Ce membre n'a aucune infraction !`,
  title: () => `Infractions`,

  old_versionDesc: (s) =>
    `${s.type + " #" + s.case}\nModérateur: <@${s.moderator}>\nRaison: ${
      s.reason
    }`,
  desc: (s, message) => {
    if (s.type === "ban")
      return `${s.type + " #" + s.case}\nModérateur: <@${
        s.moderator
      }>\nRaison: ${s.reason}`;
    else if (s.type === "kick")
      return `${s.type + " #" + s.case}\nModérateur: <@${
        s.moderator
      }>\nRaison: ${s.reason}`;
    else if (s.type === "warn")
      return `${s.type + " #" + s.case}\nModérateur: <@${
        s.moderator
      }>\nRaison: ${s.reason}`;
    else if (s.type === "mute")
      return `${s.type + " #" + s.case}\nModérateur: <@${
        s.moderator
      }>\nRaison: ${s.reason}\nDurée: ${
        s.time ? message.language.convertMs(s.time) : "Infini"
      }\n${
        s.actif
          ? s.time
            ? "Fini: " + `<t:${Math.round(s.end / 1000)}:F>`
            : ""
          : ""
      }`;
  },
};
