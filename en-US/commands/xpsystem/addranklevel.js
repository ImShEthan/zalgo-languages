const { emojis } = require("../../../../config");
module.exports = {
  title: () => "Rôle reward ajouté !",
  field: (level, role) => `${role} ● ${level} levels`,
};
