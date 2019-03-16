const User = require('./User');

class ContactList {
  constructor() {
    this.list = [];
  }

  addNewUser(user) {
    if (user instanceof User) {
      this.list.push(user);
    } else {
      throw new Error('Invalid contact');
    }
  }

  deleteUser(userId) {
    this.list = this.list.filter(user => user.id !== userId);
  }

  deleteMobile(mobile) {
    this.list = this.list.filter(user => user.mobile !== mobile);
  }

  length() {
    return this.list.length;
  }
}

module.exports = ContactList;
