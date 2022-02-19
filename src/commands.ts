export default {
  chatInfo: async (bot, content, args) => bot.getChatInfo(content, args),
  ping: async (bot, content, args) => bot.ping(content, args),
  toss: async (bot, content, args) => bot.toss(content, args),
  balance: async (bot, content, args) => bot.balance(content, args),
  epoch: async (bot, content, args) => bot.epoch(content, args),
  kanye: async (bot, content, args) => bot.kanye(content, args),
  bored: async (bot, content, args) => bot.bored(content, args),
  joke: async (bot, content, args) => bot.joke(content, args),
  doge: async (bot, content, args) => bot.doge(content, args),
  roll: async (bot, content, args) => bot.roll(content, args),
  recursion: async (bot, content, args) => bot.recursion(content, args),
  numbers: async (bot, content, args) => bot.numbers(content, args),
  average: async (bot, content, args) => bot.average(content, args),
  _get: async (bot, content, args) => bot._get(content, args),
  _set: async (bot, content, args) => bot._set(content, args),
  commandList: async (bot, content, args) => bot.commandList(content, args),
};
