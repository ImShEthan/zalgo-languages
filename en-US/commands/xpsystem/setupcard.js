const { emojis } = require("../../../../config");
module.exports = {
  desc: (data) => `
**1)** Image (Voir l'image de l'embed)
${data.background ? data.background : "Aucune image."}

**2)** Couleur de votre carte (Voir le côté de l'embed)
${data.color ? data.color : "Aucune couleur."}

***SI VOTRE IMAGE NE S'AFFICHE PAS, C'EST QU'ELLE NE MARCHERA PAS SUR VOTRE CARTE DE RANK !***`,
  link: () =>
    "Veuillez envoyer le lien de votre image. (Finissant par `png` ou `jpg`)",
  color: () =>
    "Veuillez envoyer la couleur pour votre carte. (Commençant par #)",
  invalidColor: () => "Votre couleur ne contient pas de # !",
};
