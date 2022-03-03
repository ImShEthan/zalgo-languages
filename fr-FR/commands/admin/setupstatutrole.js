const { emojis } = require("../../../../config");
module.exports = {
  desc1: (guildData, message) => `
__Activé :__\n${guildData.st1.enabled ? `✅ Activé` : `❌ Désactivé`}

__Texte de statut :__\n${
    guildData.st1.text ? `✅ Activé\n${guildData.st1.text}` : `❌ Désactivé`
  }

__Rôles donner :__\n${
    guildData.st1.roles[0]
      ? guildData.st1.roles
          .map((x) => message.guild.roles.cache.get(x.id))
          .slice(0, 5)
          .join(", ")
      : "Aucun rôle"
  }

`,
  desc2: (guildData, message) => `
__Activé :__\n${guildData.st2.enabled ? `✅ Activé` : `❌ Désactivé`}

__Texte de statut :__\n${
    guildData.st2.text ? `✅ Activé\n${guildData.st2.text}` : `❌ Désactivé`
  }

__Rôles donner :__\n${
    guildData.st2.roles[0]
      ? guildData.st2.roles
          .map((x) => message.guild.roles.cache.get(x.id))
          .slice(0, 5)
          .join(", ")
      : "Aucun rôle"
  }

`,

  roleAdd: () => `Veuillez envoyer le rôle à ajouter !`,
  removeRole: () => `Veuillez envoyer le rôle à enlever !`,
  notFound: () => `Rôle non trouvé!`,
  maxRoles: () => `Vous ne pouvez ajouter que 5 rôles maximum!`,

  first_option: () => `⚙️ Activation`,
  second_option: () => `🖍️ Texte du statut`,
  third_option: () => `➕ Ajouter un rôle`,
  fourth_option: () => `➖ Enlever un rôle`,

  title: (num) => `Statut rôle n°${num}:`,
  comp: (num) => `Statut n°${num}`,
  question1: () =>
    `Quel texte voulez vous que vos membres mettent dans leurs statut ?`,
  error1: () =>
    `${emojis.error} | Vous ne pouvez pas écrire plus de 128 caractères dans un statut !`,

  question2: () => `Veuillez envoyer le rôle que les membres recevront !`,
  error2: () => `Rôle non trouvé`,
};
