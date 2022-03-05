const { emojis } = require("../../../../config");
module.exports = {
  rapide: (ping) => `${emojis.online} Fast (${ping} ms)`,
  moyen: (ping) => `${emojis.idle} Average speed (${ping} ms)`,
  lent: (ping) => `${emojis.dnd} Slow (${ping} ms)`,
  desc: (statutPing, statutReponse, client) => `
Ping: ${statutPing}
Response time: ${statutReponse}

Shard: **${client.shardID + 1}**/**${client.shard.count}**
`,
};
