const { emojis } = require("../../../../config");
module.exports = {
  mainMenu: () => "Menu de la whitelist :",
  mainOptions: () =>
    `**1)** Ajouter une personne à la liste\n**2)** Enlever une personne de la liste\n**3)** Supprimer la liste\n**4)** Liste de la whitelist`,

  userNotFound: () => "Cet utilisateur est introuvable !",

  userToAdd: () => "Veuillez mentionner la personne à ajouter à la liste",
  alreadyInBlacklist: (user) => `${user.tag} est déjà dans la liste !`,
  userAdded: (user) => `${user.tag} a été ajouté à la liste !`,

  userToRemove: () => "Veuillez mentionner la personne à retirer de la liste",
  notYetInBlacklist: () => `Cette personne n'est pas dans la liste !`,
  userRemoved: (user) => `${user.tag} a été retiré de la liste !`,
};
