const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    switch(array[i]) {
      case '--discard-next':
        if (i < array.length - 1) i++;
        break;
      case '--discard-prev':
        if (i > 0 && array[i - 2] !== '--discard-next') result.pop();
        break;
      case '--double-next':
        if (i < array.length - 1) result.push(array[i + 1]);
        break;
      case '--double-prev':
        if (i > 0 && array[i - 2] !== '--discard-next') result.push(array[i - 1]);
        break;
      default:
        result.push(array[i]);
    }
  }

  return result;
};
