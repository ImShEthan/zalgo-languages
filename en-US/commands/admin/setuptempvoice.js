const { emojis } = require("../../../../config");
module.exports = {
  desc: (
    guildData,
    message
  ) => `__**Appuyez sur une réaction pour activer/désactiver un paramètre pour les salons temporaires.**__\n\n
**1)** __Salon manager :__\n${
    guildData.channel
      ? `${emojis.enabled} Activé\n<#${
          message.guild.channels.cache.get(guildData.channel)
            ? message.guild.channels.cache.get(guildData.channel).id
            : "Introuvable"
        }>`
      : `${emojis.disabled} Désactivé`
  }

**2)** __Catégorie :__\n${
    guildData.category
      ? `${emojis.enabled} Activé\n${
          message.guild.channels.cache.get(guildData.category)
            ? message.guild.channels.cache.get(guildData.category).name
            : "Introuvable"
        }`
      : `${emojis.disabled} Désactivé`
  }

**3)** __Prefix du salon :__\n${
    guildData.prefix ? guildData.prefix : "Aucun prefix"
  }

**4)** __Permission de gérer le salon :__\n${
    guildData.managechannel
      ? `${emojis.enabled} Activé`
      : `${emojis.disabled} Désactivé`
  }

**5)** __Permission de gérer les membres dans le salon :__\n${
    guildData.managemembers
      ? `${emojis.enabled} Activé`
      : `${emojis.disabled} Désactivé`
  }
          
__Limite par défaut :__ **${
    guildData.limitusers
  }**\n*Faites ⬆️ pour augmenter le nombre de place par défaut.*\n*Faites ⬇️ pour diminuer le nombre de place par défaut.*
`,

  error1: () =>
    `${emojis.error} | Vous devez avoir une catégorie ou mettre les salons temporaires !`,

  prefix: () => `Envoyez le prefix pour les salons temporaires !`,
};
