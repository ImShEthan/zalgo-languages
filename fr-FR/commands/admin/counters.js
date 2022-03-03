const { emojis } = require("../../../../config");
module.exports = {
  desc: (data, message) => `
**1)** __**Counter n° 1:**__
${
  data.c1.enabled
    ? `${emojis.enabled} Activé
__Salon:__ ${
        message.guild.channels.cache.get(data.c1.channel)
          ? message.guild.channels.cache.get(data.c1.channel)
          : "<:error_mys:720681441670725645> Salon introuvable !"
      }
__Type de salon:__ ${
        data.c1.channelType === "voice" ? "Salon vocal" : "Catégorie"
      }
__Texte:__ ${data.c1.text}
__Type de counter:__ ${data.c1.type}`
    : `${emojis.disabled} Désactivé`
}

**2)** __**Counter n° 2:**__
${
  data.c2.enabled
    ? `${emojis.enabled} Activé
__Salon:__ ${
        message.guild.channels.cache.get(data.c2.channel)
          ? message.guild.channels.cache.get(data.c2.channel)
          : "<:error_mys:720681441670725645> Salon introuvable !"
      }
__Type de salon:__ ${
        data.c2.channelType === "voice" ? "Salon vocal" : "Catégorie"
      }
__Texte:__ ${data.c2.text}
__Type de counter:__ ${data.c2.type}`
    : `${emojis.disabled} Désactivé`
}

**3)** __**Counter n° 3:**__
${
  data.c3.enabled
    ? `${emojis.enabled} Activé
__Salon:__ ${
        message.guild.channels.cache.get(data.c3.channel)
          ? message.guild.channels.cache.get(data.c3.channel)
          : "<:error_mys:720681441670725645> Salon introuvable !"
      }
__Type de salon:__ ${
        data.c3.channelType === "voice" ? "Salon vocal" : "Catégorie"
      }
__Texte:__ ${data.c3.text}
__Type de counter:__ ${data.c3.type}`
    : `${emojis.disabled} Désactivé`
}

**4)** __**Counter n° 4:**__
${
  data.c4.enabled
    ? `${emojis.enabled} Activé
__Salon:__ ${
        message.guild.channels.cache.get(data.c4.channel)
          ? message.guild.channels.cache.get(data.c4.channel)
          : "<:error_mys:720681441670725645> Salon introuvable !"
      }
__Type de salon:__ ${
        data.c4.channelType === "voice" ? "Salon vocal" : "Catégorie"
      }
__Texte:__ ${data.c4.text}
__Type de counter:__ ${data.c4.type}`
    : `${emojis.disabled} Désactivé`
}
`,

  desc2: () => `
**1)** Membres sur le serveur
**2)** Membres (hors bots) sur le serveur
**3)** Membres (hors utilisateurs) sur le serveur
**4)** Catégories sur le serveur
**5)** Salons texte sur le serveur
**6)** Salons vocaux sur le serveur
**7)** Boosts sur le serveur
**8)** Membres en ligne sur le serveur
**9)** Rôles sur le serveur
**10)** Membres connectés en salon vocal sur le serveur
`,

  type: () =>
    `Réagissez à 📜 pour créer le counter en salon vocal\nRéagissez à 📑 pour créer le counter en catégorie`,

  vocal: () => `Salon vocal`,
  cat: () => `Catégorie`,

  example: () =>
    `Entrez le nom que vous voulez pour votre counter ! **(Exemple: \`📌・Membres: {count}\`)**`,
  error: () => `Votre nom de salon doit contenir \`{count}\` !`,
};
