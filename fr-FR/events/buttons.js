const { emojis } = require("../../../config");
module.exports = {
  add: () => `Ajouter les rôles`,
  remove: () => `Supprimer les rôles`,
  title: (button) => `En cliquant sur le bouton ${button.name}:`,
  desc: (rolesAdded, rolesRemoved) =>
    `Rôles ajoutés: ${rolesAdded.length}\nRôles supprimés: ${rolesRemoved.length}`,
  successAdded: () => `Rôle ajouté avec succès!`,
  successRemoved: () => `Rôle enlevé avec succès!`,
  successAdded1: () => `Rôles ajoutés avec succès!`,
  successRemoved1: () => `Rôles enlevés avec succès!`,
};
