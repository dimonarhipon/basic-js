const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct) {
    this.direct = direct !== undefined ? direct : true;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error();
    }    
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error();
    }
  }
}

module.exports = VigenereCipheringMachine;
