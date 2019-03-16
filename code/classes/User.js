const uuidV4 = require('uuid/v4');
const { ErrorMessages } = require('./lib/consts');
const { isValidMobileNumber } = require('./utils');

class User {
  constructor({
    firstName, lastName, mobile, address,
  }) {
    if (!firstName) {
      throw new Error(ErrorMessages.FirstNameRequired);
    }

    if (!mobile) {
      throw new Error(ErrorMessages.MobileRequired);
    }

    if (!isValidMobileNumber(mobile)) {
      throw new Error(ErrorMessages.InvalidMobile);
    }

    /**
     * Both the above cases can be merged as one
      if (!isValidMobileNumber(mobile)) {
       throw new Error('Mobile number is missing/invalid);
      }
    */

    this.id = uuidV4();
    this.firstName = firstName;
    this.lastName = lastName;
    this.mobile = mobile;
    this.address = address;
  }

  getFullname() {
    return `${this.firstName} ${this.lastName}`;
  }

  canVote() {
    return this.age >= 18;
  }
}

module.exports = User;
