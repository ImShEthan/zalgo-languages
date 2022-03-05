const { emojis } = require("../../../../config");
module.exports = {
  userNotFound: () =>
    `${emojis.error} | Please mention a valid member!`,
  userIsBot: () => `${emojis.error} | This user is a bot!`,
  noSanctions: () => `This member has no infraction!`,
  title: () => `Infractions`,

  old_versionDesc: (s) =>
    `${s.type + " #" + s.case}\nModerator: <@${s.moderator}>\nReason: ${
      s.reason
    }`,
  desc: (s, message) => {
    if (s.type === "ban")
      return `${s.type + " #" + s.case}\nModerator: <@${
        s.moderator
      }>\nReason: ${s.reason}`;
    else if (s.type === "kick")
      return `${s.type + " #" + s.case}\nModerator: <@${
        s.moderator
      }>\nReason: ${s.reason}`;
    else if (s.type === "warn")
      return `${s.type + " #" + s.case}\nModerator: <@${
        s.moderator
      }>\nReason: ${s.reason}`;
    else if (s.type === "mute")
      return `${s.type + " #" + s.case}\nModerator: <@${
        s.moderator
      }>\nReason: ${s.reason}\nDurée: ${
        s.time ? message.language.convertMs(s.time) : "Infinity"
      }\n${
        s.actif
          ? s.time
            ? "End: " + `<t:${Math.round(s.end / 1000)}:F>`
            : ""
          : ""
      }`;
  },
};
