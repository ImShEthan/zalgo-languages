const { emojis } = require("../../../../config");
module.exports = {
  rapide: (ping) => `${emojis.online} Rapide (${ping} ms)`,
  moyen: (ping) => `${emojis.idle} Vitesse moyenne (${ping} ms)`,
  lent: (ping) => `${emojis.dnd} Lent (${ping} ms)`,
  desc: (statutPing, statutReponse, client) => `
Ping : ${statutPing}
Temps de réponse : ${statutReponse}

Shard: **${client.shardID + 1}**/**${client.shard.count}**
`,
};
