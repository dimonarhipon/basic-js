const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    const another = members.filter(item => typeof item === 'string');
    const names = another.map(item => item.split(' ').join('')[0].toUpperCase())
    .sort().join('');
    return names;
  }
  return false;
};
