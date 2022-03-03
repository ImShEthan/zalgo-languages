const { emojis } = require("../../../../config");
module.exports = {
  mainMenu: () => "Menu de la blacklist :",
  mainOptions: () =>
    `**1)** Ajouter une personne à la blacklist\n**2)** Enlever une personne de la blacklist\n**3)** Supprimer la blacklist\n**4)** Liste des membres blacklist`,

  userNotFound: () => "Cet utilisateur est introuvable !",

  userToAdd: () => "Veuillez mentionner la personne à ajouter à la blacklist",
  alreadyInBlacklist: (user) => `${user.tag} est déjà dans la blacklist !`,
  banUser: (user) => `${user.tag} est blacklist ! Je l'ai donc ban.`,
  userAdded: (user) => `${user.tag} a été ajouté à la blacklist !`,

  userToRemove: () =>
    "Veuillez mentionner la personne à retirer de la blacklist",
  notYetInBlacklist: () => `Cette personne n'est pas dans la blacklist !`,
  unbanUser: (user) => `${user.tag} est déblacklist ! Je l'ai donc unban.`,
  userRemoved: (user) => `${user.tag} a été retiré de la blacklist !`,
};
