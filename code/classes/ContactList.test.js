const ContactList = require('./ContactList');
const User = require('./User');

describe('Contact List Class', () => {
  it('Should be a class', () => {
    expect(typeof ContactList.prototype.constructor).toEqual('function');
  });

  describe('Contact List API', () => {
    describe('Add a user', () => {
      it('Should only add USER instance', () => {});
      it('Should has length of 2', () => {});
      it('Should only add USER instance', () => {});
    });

    describe('Delete using user ID', () => {
      it('Should only add USER instance', () => {});
      it('Should has length of 2', () => {});
      it('Should only add USER instance', () => {});
    });

    describe('Delete using mobile number', () => {
      it('Should only add USER instance', () => {});
      it('Should has length of 2', () => {});
      it('Should only add USER instance', () => {});
    });
  });
});
