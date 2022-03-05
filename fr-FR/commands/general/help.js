const { emojis } = require("../../../../config");
module.exports = {
  question: () =>
    `De quelle façon voulez vous que la page d'aide soit affichée ?`,
  commands: () => `Commandes`,
  infos: (guild, prefix, result) =>
    `Le préfixe actuel dans __**${guild}**__ est \`${prefix}\`.`,
  title: () => `Menu d'aide :`,
  desc: (isOwner) =>
    `***Appuyez sur une réaction pour voir les commandes d'une catégorie.***\n\n**1)** Administration\n**2)** Games\n**3)** Général\n**4)** Invitations\n**5)** Modération\n**6)** Levels\n${
      isOwner ? "**7)** Owner" : ""
    }`,
  page: () => `En une page`,
  pageMultiple: () => `En plusieurs pages`,

  returnToMenu: () => `↩️ Pour revenir au menu principal`,

  admin: (prefix) => `
\`${prefix}admins\` ● Voir la liste des administrateurs du serveur.
\`${prefix}anti-capitals\` ● Empêche l'envoie de messages avec des majuscules.
\`${prefix}anti-emojis\` ● Empêche l'envoie de messages avec des emojis.
\`${prefix}anti-links\` ● Empêche l'envoie des liens discord et de liens https.
\`${prefix}anti-mass-join\` ● Empêche les membres de rejoindre trop vite le serveur.
\`${prefix}anti-mass-mentions\` ● Empêche l'envoie de messages avec des mentions.
\`${prefix}anti-spam\` ● Configurer l'anti spam.
\`${prefix}autorole\` ● Ajouter un rôle à un nouveau membre à sa venue.
\`${prefix}blacklist\` ● Blacklist des membres.
\`${prefix}bots\` ● Voir les bots du serveur.
\`${prefix}counters\` ● Configurer des salons pour pouvoir avoir des statistiques.
\`${prefix}embed\` ● Créer un embed.
\`${prefix}emojicreate\` ● Créer un émoji.
\`${prefix}join-message\` ● Configurer le message de bienvenue.
\`${prefix}leave-message\` ● Configurer le message de départ.
\`${prefix}emojicreate\` ● Créer un émoji sur le serveur en donnant un lien d'image (png, jpg).
\`${prefix}logs-master\` ● Configurer les logs sur votre serveur.
\`${prefix}owners\` ● Donner l'accès à certains membres aux commandes réservées pour l'owner du serveur.
\`${prefix}permissions\` ● Configurer les permissions des commandes sur des rôles.
\`${prefix}protect-plugin\` ● Configurer l'anti-raid.
\`${prefix}react-role\` ● Gérer les réactions-rôles (boutons).
\`${prefix}setlang\` ● Changer la langue du bot sur ce serveur.
\`${prefix}setprefix\` ● Changer le préfixe du bot sur ce serveur.
\`${prefix}setup-statut-role\` ● Configurer le rôle à donner si un membre a tel texte dans son statut.
\`${prefix}setup-temp-voice\` ● Configurer les salons temporaires (vocal).
\`${prefix}whitelist\` ● Whitelist de l'anti raid.
`,

  games: (prefix) => `
\`${prefix}awkword\` ● Créer une partie de awkword.
\`${prefix}betrayal\` ● Créer une partie de betrayal.
\`${prefix}checkers\` ● Créer une partie de checkers.
\`${prefix}chess\` ● Créer une partie de chess.
\`${prefix}doodlecrew\` ● Créer une partie de doodlecrew.
\`${prefix}fishing\` ● Créer une partie de fishing.
\`${prefix}lettertile\` ● Créer une partie de lettertile.
\`${prefix}poker\` ● Créer une partie de poker.
\`${prefix}puttparty\` ● Créer une partie de puttparty.
\`${prefix}spellcast\` ● Créer une partie de spellcast.
\`${prefix}wordsnack\` ● Créer une partie de wordsnack.
\`${prefix}youtube\` ● Créer une partie de youtube.
`,

  general: (prefix) => `
\`${prefix}addbot\` ● Avoir le lien d'invitation du bot.
\`${prefix}avatar\` ● Voir l'avatar d'une personne.
\`${prefix}banner\` ● Voir la bannière d'une personne.
\`${prefix}emoji\` ● Avoir les informations à propos d'un émoji.
\`${prefix}help\` ● Voir les commandes du bot.
\`${prefix}ping\` ● Voir la latence du bot.
\`${prefix}server-avatar\` ● Voir l'avatar du serveur.
\`${prefix}server-banner\` ● Voir la bannière du serveur.
\`${prefix}server-emojis\` ● Voir les émojis du serveur.
\`${prefix}server-info\` ● Voir les informations du serveur.
\`${prefix}server-names\` ● Voir les anciens noms du serveur.
\`${prefix}snipe\` ● Voir le dernier message supprimé d'un salon.
\`${prefix}someone\` ● Donne des informations sur un membre au hasard.
\`${prefix}user-avatars\` ● Voir les anciens avatars d'un membre.
\`${prefix}user-info\` ● Voir les informations d'un membre.
\`${prefix}user-names\` ● Voir les anciens noms d'un membre.
\`${prefix}zalgo-badges\` ● Voir les badges du bot.
`,

  giveaway: (prefix) => `
\`${prefix}giveaway-end\` ● Terminer un concours.
\`${prefix}giveaway-list\` ● Liste des concours.
\`${prefix}giveaway-reroll\` ● Re-jouer le concours.
\`${prefix}giveaway\` ● Créer un concours.
`,

  invites: (prefix) => `
\`${prefix}addbonus\` ● Ajouter un bonus d'invitations à un membre.
\`${prefix}fetch-invites\` ● Fetch les invitations pour éviter les bugs.
\`${prefix}invites\` ● Voir ses invitations ou celles d'un membre.
\`${prefix}leaderboard-invites\` ● Voir le top des invitations du serveur.
\`${prefix}removebonus\` ● Enlever un bonus d'invitations à un membre.
\`${prefix}reset-server-invites\` ● Supprimer les invitations de tous les membres du serveur.
\`${prefix}restore-server-invites\` ● Remettre les invitations de tous les membres du serveur.
\`${prefix}sync-invites\` ● Synchroniser les invitations du serveur si vous avez effectué des invitations avant d'avoir ajouté le bot.
`,
  mod: (prefix) => `
\`${prefix}auto-sanctions\` ● Configurer des sanctions automatiques au bout d'un certain nombre de warns.
\`${prefix}ban\` ● Bannir un membre.
\`${prefix}clear-sanctions\` ● Supprimer les bans, kicks, warns d'un membre.
\`${prefix}clear\` ● Supprimer des messages (\`${prefix}clear 5 <user>\` pour supprimer les messages d'un membre).
\`${prefix}kick\` ● Kick un membre.
\`${prefix}lock\` ● Fermer un salon.
\`${prefix}moove\` ● Déplacer les membres d'un salon vocal dans un autre.
\`${prefix}mute-list\` ● Voir les membres mutes.
\`${prefix}mute\` ● Mute un membre.
\`${prefix}nuke\` ● Recréer le salon où a été effectuée la commande.
\`${prefix}sanctions\` ● Voir les sanctions d'un membre.
\`${prefix}unban\` ● Débannir un membre.
\`${prefix}unlock\` ● Ouvrir un salon.
\`${prefix}unmute\` ● Unmute un membre.
\`${prefix}warn\` ● Avertir un membre.
`,
  xp: (prefix) => `
\`${prefix}addrank-level\` ● Ajouter un rôle à donner si un membre a tel niveau.
\`${prefix}leaderboard-level\` ● Voir le top des niveaux du serveur.
\`${prefix}rank\` ● Voir son niveau ou celui d'un membre.
\`${prefix}ranks-level\` ● Voir tous les rôles à donner si un membre a tel niveau.
\`${prefix}removerank-level\` ●  Supprimer un rôle à donner si un membre a tel niveau.
\`${prefix}reset-card\` ●  Supprimer la configuration de sa carte.
\`${prefix}reset-server\` ● Supprimer les niveaux de tous les membres du serveur.
\`${prefix}restore-server\` ● Remettre les niveaux de tous les membres du serveur.
\`${prefix}setup-card\` ● Configurer sa carte de rank.
\`${prefix}setup-system\` ● Configurer le message et le salon où le message de passage de niveau sera envoyé.
`,

  owner: (prefix) => `
\`${prefix}eval\` ● Effectuer du code javascript.
\`${prefix}server-list\` ● Voir la liste des serveurs du bot.
`,
};
