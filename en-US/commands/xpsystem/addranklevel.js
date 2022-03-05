const { emojis } = require("../../../../config");
module.exports = {
  title: () => "Role reward added !",
  field: (level, role) => `${role} ● ${level} levels`,
};
//d