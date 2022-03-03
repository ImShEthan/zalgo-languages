const { emojis } = require("../../../../config");
module.exports = {
  mainEmbedDescription: (
    guildData,
    message
  ) => `__**Appuyez sur une réaction pour activer/désactiver un paramètre.**__\n\n
**1)** __Système d'xp :__\n${
    guildData.enabled
      ? `${emojis.enabled} Activé`
      : `${emojis.disabled} Désactivé`
  }

**2)** __Salon :__\n${
    guildData.channel
      ? `${emojis.enabled} Activé\n<#${
          message.guild.channels.cache.get(guildData.channel)
            ? message.guild.channels.cache.get(guildData.channel).id
            : "Salon introuvable !"
        }>`
      : `${emojis.disabled} Désactivé`
  }

**3)** __Message :__\n${
    guildData.message
      ? `${emojis.enabled} Activé\n\`\`\`${guildData.message}\`\`\``
      : `${emojis.disabled} Désactivé`
  }

**4)** *Pour reset le message de level*

**5)** Les boosters ont un bonus d'xp ? ${
    guildData.boosterxp ? "Oui: x" + guildData.boosterxp : "Non"
  }

**6)** Xp multiplié par :\n${guildData.xpmultiplicator}
          `,
  channel: () =>
    "Veuillez mentionner le salon pour envoyer les messages de level !",
  msg: () =>
    "Envoyez le message que vous voulez pour les messages de level !\n\n```INFOS :\n\n{author} : Mention de l'auteur du message.\n{author.tag} : Tag de l'auteur du message.\n{author.name} : Nom de l'auteur du message.\n{author.id} : ID de l'auteur du message.\n{author.createdat} : Création du compte de l'auteur du message.\n{author.createdattimestamp} : Création du compte de l'auteur du message en Unix Timestamp.\n{level} : Nouveau level de la personne.\n{levelxp} : XP jusqu'au prochain level.\n{allxp} : XP total de la personne.```",
  tooChars: () => "Vous avez trop de caracteres dans votre message !",
  success: () => "Bravo {author}, tu es maintenant niveau **{level}** !",
  multiplicator: () => "Veuillez envoyer le multiplicateur ! (ex: 2)",
  invalidInt: () => `${emojis.error} | Envoyez un chiffre valide !`,
};
