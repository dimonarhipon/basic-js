const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  const count = [].concat(...matrix).filter(item => item === '^^');
  if (count.length === 0) {
    return 0;
  }
  return count.length;
};
