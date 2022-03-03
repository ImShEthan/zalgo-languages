const { emojis } = require("../../../../config");
module.exports = {
  desc1: (guildData, message) => `
__Enabled :__\n${guildData.st1.enabled ? `✅ Enabled` : `❌ Disabled`}

__Status text :__\n${
    guildData.st1.text ? `✅ Enabled\n${guildData.st1.text}` : `❌ Disabled`
  }

__Roles given :__\n${
    guildData.st1.roles[0]
      ? guildData.st1.roles
          .map((x) => message.guild.roles.cache.get(x.id))
          .slice(0, 5)
          .join(", ")
      : "No role"
  }

`,
  desc2: (guildData, message) => `
__Enabled :__\n${guildData.st2.enabled ? `✅ Enabled` : `❌ Disabled`}

__Status text :__\n${
    guildData.st2.text ? `✅ Enabled\n${guildData.st2.text}` : `❌ Disabled`
  }

__Roles given :__\n${
    guildData.st2.roles[0]
      ? guildData.st2.roles
          .map((x) => message.guild.roles.cache.get(x.id))
          .slice(0, 5)
          .join(", ")
      : "No role"
  }

`,

  roleAdd: () => `Please send the role to be added!`,
  removeRole: () => `Please send the role to be removed!`,
  notFound: () => `Role not found!`,
  maxRoles: () => `You can only add a maximum of 5 roles!`,

  first_option: () => `⚙️ Activation`,
  second_option: () => `🖍️ Status text`,
  third_option: () => `➕ Add role`,
  fourth_option: () => `➖ Remove role`,

  title: (num) => `Role status n°${num}:`,
  comp: (num) => `Status n°${num}`,
  question1: () =>
    `What text do you want your members to add to their status?`,
  error1: () =>
    `${emojis.error} | You can't write more than 128 characters in a status!`,

  question2: () => `Please send the role that members will receive!`,
  error2: () => `Role not found`,
};
